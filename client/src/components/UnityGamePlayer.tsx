import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const unityInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen || !gamePath) {
      // Reset state when closed
      setIsLoading(false);
      setLoadProgress(0);
      setError(null);
      return;
    }

    // Don't initialize if already initialized
    if (unityInstanceRef.current) {
      return;
    }

    // Try to detect the actual Unity build name from the folder
    // First try the folder name, then try common names like "VM", "Build", etc.
    const gameName = gamePath.split("/").pop() || "game";
    let scripts: HTMLScriptElement[] = [];

    const loadUnityGame = async () => {
      try {
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
            setLoadProgress(20);
            resolve();
          };
          loaderScript.onerror = () => {
            reject(new Error(`Failed to load Unity loader from ${loaderPath}. Make sure the file exists at: ${gamePath}/Build/VM.loader.js (or ${gamePath}/Build/${gameName}.loader.js)`));
          };
          document.body.appendChild(loaderScript);
          scripts.push(loaderScript);
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

        setLoadProgress(40);

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
            setLoadProgress(40 + progress * 60);
          }
        );

        unityInstanceRef.current = instance;
        setIsLoading(false);
        setLoadProgress(100);
      } catch (err: any) {
        console.error("Error loading Unity game:", err);
        setError(err.message || `Failed to load game from ${gamePath}. Make sure the Unity WebGL build files are uploaded to the public folder.`);
        setIsLoading(false);
      }
    };

    loadUnityGame();

    // Cleanup function
    return () => {
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
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      scripts = [];

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
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 gap-0 bg-black/95 border-2 border-primary/50">
        <DialogHeader className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-white text-xl font-bold">
                {gameTitle}
              </DialogTitle>
              <DialogDescription className="text-white/70 text-sm mt-1">
                Play this game directly in your browser
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="relative w-full h-full flex items-center justify-center bg-black">
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
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                <p className="text-white text-lg mb-2">Loading {gameTitle}...</p>
                <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-white/70 text-sm mt-2">{loadProgress}%</p>
              </motion.div>
            </AnimatePresence>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10 p-8">
              <div className="text-center max-w-md">
                <p className="text-red-400 text-lg mb-4">Failed to load game</p>
                <p className="text-white/70 text-sm mb-6">{error}</p>
                <Button onClick={handleClose} variant="outline">
                  Close
                </Button>
              </div>
            </div>
          )}

          <canvas
            ref={canvasRef}
            id="unity-canvas"
            className="w-full h-full"
            style={{
              width: "100%",
              height: "100%",
              display: isLoading || error ? "none" : "block",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
