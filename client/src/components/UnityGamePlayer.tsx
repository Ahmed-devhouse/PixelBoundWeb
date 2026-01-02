import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Loader2, Maximize2, Minimize2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UnityGamePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle: string;
  gamePath: string; // Path to Unity WebGL build folder (e.g., "/games/viral-match-3d")
}

export function UnityGamePlayer({
  isOpen,
  onClose,
  gameTitle,
  gamePath,
}: UnityGamePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const unityInstanceRef = useRef<any>(null);
  const scriptsRef = useRef<HTMLScriptElement[]>([]);
  const isLoadingRef = useRef(false);

  // Handle window resize for responsive canvas
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && unityInstanceRef.current && !isLoading) {
        // Unity will handle canvas resizing automatically, but we ensure proper dimensions
        const container = containerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          canvasRef.current.style.width = `${rect.width}px`;
          canvasRef.current.style.height = `${rect.height}px`;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading]);

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isOpen || !gamePath) {
      // Reset state when closed
      setIsLoading(false);
      setLoadProgress(0);
      setError(null);
      isLoadingRef.current = false;
      return;
    }

    // Don't initialize if already initialized or currently loading
    if (unityInstanceRef.current || isLoadingRef.current) {
      return;
    }

    // Try to detect the actual Unity build name from the folder
    // First try the folder name, then try common names like "VM", "Build", etc.
    const gameName = gamePath.split("/").pop() || "game";
    scriptsRef.current = [];

    const loadUnityGame = async () => {
      try {
        isLoadingRef.current = true;
        setIsLoading(true);
        setError(null);
        setLoadProgress(0);

        // Try different possible loader file names (Unity builds can have different naming)
        const possibleNames = ["VM", gameName, "Build", "game"];
        let loaderPath = "";
        let actualGameName = "VM"; // Default to VM since that's what your build uses

        // Try to find the loader file
        for (const name of possibleNames) {
          const testPath = `${gamePath}/Build/${name}.loader.js`;
          try {
            const response = await fetch(testPath, { method: "HEAD" });
            if (response.ok) {
              loaderPath = testPath;
              actualGameName = name;
              break;
            }
          } catch (e) {
            // Continue to next name
          }
        }

        if (!loaderPath) {
          // Fallback - try VM first since that's what your build uses
          loaderPath = `${gamePath}/Build/VM.loader.js`;
          actualGameName = "VM";
        }

        // Load Unity loader script first
        const loaderScript = document.createElement("script");
        loaderScript.src = loaderPath;
        loaderScript.async = true;

        await new Promise<void>((resolve, reject) => {
          loaderScript.onload = () => {
            setLoadProgress((prev) => Math.max(prev, 20));
            resolve();
          };
          loaderScript.onerror = () => {
            reject(new Error(`Failed to load Unity loader from ${loaderPath}. Make sure the file exists at: ${gamePath}/Build/VM.loader.js (or ${gamePath}/Build/${gameName}.loader.js)`));
          };
          document.body.appendChild(loaderScript);
          scriptsRef.current.push(loaderScript);
        });

        // Wait for Unity global to be available
        let attempts = 0;
        while (!(window as any).createUnityInstance && attempts < 50) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          attempts++;
        }

        if (!(window as any).createUnityInstance) {
          throw new Error("Unity loader script did not initialize properly");
        }

        setLoadProgress((prev) => Math.max(prev, 40));

        // Wait a bit to ensure canvas is fully in DOM
        await new Promise((resolve) => setTimeout(resolve, 200));

        // Initialize Unity instance
        if (!canvasRef.current) {
          throw new Error("Canvas element not found");
        }

        // Ensure canvas is visible and has proper dimensions
        const canvas = canvasRef.current;
        if (!canvas.parentElement) {
          throw new Error("Canvas is not attached to DOM");
        }

        // Ensure canvas has proper attributes
        canvas.setAttribute("tabindex", "-1");
        if (!canvas.id) {
          canvas.id = "unity-canvas";
        }

        // Ensure Unity container elements exist (they're created in JSX but make sure they're accessible)
        const ensureUnityElements = () => {
          let container = document.getElementById("unity-container");
          if (!container) {
            container = document.createElement("div");
            container.id = "unity-container";
            container.className = "unity-desktop";
            container.style.display = "none";
            document.body.appendChild(container);
          }

          if (!document.getElementById("unity-loading-bar")) {
            const loadingBar = document.createElement("div");
            loadingBar.id = "unity-loading-bar";
            loadingBar.style.display = "none";
            const logo = document.createElement("div");
            logo.id = "unity-logo";
            loadingBar.appendChild(logo);
            const progressBarEmpty = document.createElement("div");
            progressBarEmpty.id = "unity-progress-bar-empty";
            const progressBarFull = document.createElement("div");
            progressBarFull.id = "unity-progress-bar-full";
            progressBarEmpty.appendChild(progressBarFull);
            loadingBar.appendChild(progressBarEmpty);
            container.appendChild(loadingBar);
          }

          if (!document.getElementById("unity-warning")) {
            const warning = document.createElement("div");
            warning.id = "unity-warning";
            container.appendChild(warning);
          }

          if (!document.getElementById("unity-footer")) {
            const footer = document.createElement("div");
            footer.id = "unity-footer";
            footer.style.display = "none";
            const logoTitle = document.createElement("div");
            logoTitle.id = "unity-logo-title-footer";
            footer.appendChild(logoTitle);
            const fullscreenBtn = document.createElement("div");
            fullscreenBtn.id = "unity-fullscreen-button";
            footer.appendChild(fullscreenBtn);
            const buildTitle = document.createElement("div");
            buildTitle.id = "unity-build-title";
            footer.appendChild(buildTitle);
            container.appendChild(footer);
          }
        };
        ensureUnityElements();

        // Patch querySelector to handle empty selectors gracefully (Unity bug workaround)
        if (!(document as any).__originalQuerySelector) {
          (document as any).__originalQuerySelector = document.querySelector;
          document.querySelector = function(selector: string) {
            if (!selector || selector.trim() === '' || selector === '#') {
              console.warn('Unity tried to querySelector with empty/invalid selector, returning null');
              return null;
            }
            return (document as any).__originalQuerySelector.call(document, selector);
          } as typeof document.querySelector;
        }

        // Try Brotli compressed files first (.br), fallback to uncompressed
        const basePath = `${gamePath}/Build/${actualGameName}`;
        const dataUrl = `${basePath}.data.br`;
        const frameworkUrl = `${basePath}.framework.js.br`;
        const codeUrl = `${basePath}.wasm.br`;

        // Create a wrapper config object that Unity expects
        const config: any = {
          dataUrl: dataUrl,
          frameworkUrl: frameworkUrl,
          codeUrl: codeUrl,
          streamingAssetsUrl: `${gamePath}/StreamingAssets`,
          companyName: "PixelBound Games",
          productName: gameTitle,
          productVersion: "1.0",
        };

        // Add error handler to catch Unity errors
        config.onAbort = (message: string) => {
          console.error("Unity aborted:", message);
          setError(`Unity game aborted: ${message}`);
          setIsLoading(false);
        };

        const instance = await (window as any).createUnityInstance(
          canvas,
          config,
          (progress: number) => {
            // Use functional update to ensure smooth progress updates
            setLoadProgress((prev) => {
              const newProgress = 40 + progress * 60;
              // Only update if progress increased to prevent glitches
              return Math.max(prev, Math.min(newProgress, 99));
            });
          }
        );

        unityInstanceRef.current = instance;
        setLoadProgress(100);
        // Small delay before hiding loading to ensure smooth transition
        await new Promise((resolve) => setTimeout(resolve, 300));
        setIsLoading(false);
        isLoadingRef.current = false;
      } catch (err: any) {
        console.error("Error loading Unity game:", err);
        setError(err.message || `Failed to load game from ${gamePath}. Make sure the Unity WebGL build files are uploaded to the public folder.`);
        setIsLoading(false);
        isLoadingRef.current = false;
      }
    };

    loadUnityGame();

    // Cleanup function
    return () => {
      isLoadingRef.current = false;
      
      // Quit Unity instance if it exists
      if (unityInstanceRef.current) {
        try {
          unityInstanceRef.current.Quit();
        } catch (e) {
          console.error("Error quitting Unity:", e);
        }
        unityInstanceRef.current = null;
      }

      // Remove all loaded scripts
      scriptsRef.current.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      scriptsRef.current = [];

      // Restore original querySelector
      if ((document as any).__originalQuerySelector) {
        document.querySelector = (document as any).__originalQuerySelector;
      }
    };
  }, [isOpen, gamePath, gameTitle]);

  const handleClose = () => {
    // Quit Unity instance before closing
    if (unityInstanceRef.current) {
      try {
        unityInstanceRef.current.Quit();
      } catch (e) {
        console.error("Error quitting Unity:", e);
      }
      unityInstanceRef.current = null;
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="max-w-[98vw] sm:max-w-[95vw] w-full h-[98vh] sm:h-[95vh] p-0 gap-0 bg-gradient-to-br from-black via-black/95 to-black border-2 border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
        style={{ 
          maxHeight: "98vh",
          height: "98vh"
        }}
      >
        {/* Modern Header */}
        <DialogHeader className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-xl border-b border-white/10 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <motion.div
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-white text-base sm:text-xl font-bold truncate">
                  {gameTitle}
                </DialogTitle>
                <DialogDescription className="text-white/60 text-xs sm:text-sm mt-0.5 hidden sm:block">
                  Play directly in your browser
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-white/80 hover:text-white hover:bg-red-500/20 rounded-xl transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div 
          ref={containerRef}
          className="relative w-full flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden"
          style={{ 
            height: "calc(100% - 60px)",
            marginTop: "60px",
            minHeight: "calc(100vh - 60px)",
          }}
        >
          {/* Unity expects these DOM elements - create them but hide them */}
          <div id="unity-container" style={{ display: "none" }}>
            <div id="unity-loading-bar" style={{ display: "none" }}>
              <div id="unity-logo"></div>
              <div id="unity-progress-bar-empty">
                <div id="unity-progress-bar-full"></div>
              </div>
            </div>
            <div id="unity-warning"></div>
            <div id="unity-footer" style={{ display: "none" }}>
              <div id="unity-logo-title-footer"></div>
              <div id="unity-fullscreen-button"></div>
              <div id="unity-build-title"></div>
            </div>
          </div>

          {isLoading && (
            <AnimatePresence>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-sm z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative">
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Loading spinner */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
                    <motion.div
                      className="flex flex-col items-center gap-4 sm:gap-6"
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                      </motion.div>
                      
                      <div className="text-center">
                        <motion.p
                          className="text-white text-base sm:text-lg font-semibold mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Loading {gameTitle}...
                        </motion.p>
                        <p className="text-white/50 text-xs sm:text-sm">
                          Please wait while we prepare your game
                        </p>
                      </div>

                      {/* Modern progress bar */}
                      <div className="w-full max-w-xs sm:max-w-sm">
                        <div className="w-full h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: `${loadProgress}%` }}
                            transition={{ 
                              duration: 0.3,
                              ease: "easeOut"
                            }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </motion.div>
                        </div>
                        <motion.p
                          className="text-white/80 text-sm sm:text-base font-bold mt-2 text-center"
                          key={loadProgress}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                        >
                          {Math.round(loadProgress)}%
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {error && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-sm z-10 p-4 sm:p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-3xl p-6 sm:p-8 max-w-md text-center shadow-2xl">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <X className="h-8 w-8 sm:h-10 sm:w-10 text-red-400" />
                </motion.div>
                <p className="text-red-400 text-lg sm:text-xl font-bold mb-2">Failed to load game</p>
                <p className="text-white/70 text-sm sm:text-base mb-6">{error}</p>
                <Button
                  onClick={handleClose}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          )}

          <canvas
            ref={canvasRef}
            id="unity-canvas"
            className="w-full h-full object-contain"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              display: isLoading || error ? "none" : "block",
              imageRendering: "auto",
            }}
          />
          
          {/* Responsive overlay hint for mobile */}
          {!isLoading && !error && (
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/80 text-xs sm:hidden z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Tap to interact
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
