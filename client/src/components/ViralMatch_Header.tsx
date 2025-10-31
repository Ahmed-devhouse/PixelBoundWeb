import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/vivi/icongif.gif";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePolicyClick = () => {
    window.open("/privacy-policy-ViralMatch", "_blank", "noopener,noreferrer");
  };

  const handlePlayOnlineClick = () => {
    window.location.href = "/privacy-policy-ViralMatch";
  };

  return (
    // Use left:0 right:0 with mx-auto and max-w to avoid overflow issues
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/72 shadow-lg backdrop-blur-2xl border border-sky-400/20"
          : "bg-black/40 shadow-md backdrop-blur-lg border border-white/10"
      }`}
      style={{ pointerEvents: "auto" }}
    >
      {/* Center container that strictly respects viewport width + padding */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-2">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection("top")}
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />
            <div className="font-montserrat text-sm sm:text-base font-extrabold tracking-wider uppercase whitespace-nowrap">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
                Viral
              </span>{" "}
              <span className="text-white">Match</span>
            </div>
          </motion.div>

          {/* Navigation + action area (allows wrapping) */}
          <div className="flex items-center gap-3 ml-2 flex-1 justify-end">
            {/* Desktop Navigation - hidden on small screens */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
 
              <button
                onClick={()=>scrollToSection("top")}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Home
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>
              <button
                onClick={()=>scrollToSection("story")}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Story
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>
              <button
                onClick={()=>scrollToSection("games")}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Games
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>

              <button
                onClick={handlePolicyClick}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Privacy Policy
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>

              <Button
                onClick={handlePlayOnlineClick}
                className="bg-gradient-to-r from-sky-400 to-pink-400 text-white font-bold rounded-full px-4 py-2 text-sm hover:shadow-[0_0_16px_rgba(56,189,248,0.55)] transition-transform hover:scale-105 border-0"
              >
                Play Online
              </Button>
            </nav>

            {/* Right controls - theme + mobile menu */}
            <div className="flex items-center gap-2">
              
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen((s) => !s)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - constrained inset-x so it never overflows */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="relative"
            >
              <div
                // use inset-x padding consistent with container px to avoid overflow
                className="absolute left-4 right-4 mt-3 rounded-3xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-lg p-4 lg:hidden"
              >
                <nav className="flex flex-col gap-3 text-center">
                <button
                onClick={()=>scrollToSection("top")}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Home
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>
              <button
                onClick={()=>scrollToSection("story")}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Story
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>
              <button
                onClick={()=>scrollToSection("games")}
                className="relative text-white/80 hover:text-white font-semibold text-sm"
              >
                Games
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-pink-400 rounded-full scale-x-0 origin-left transition-transform duration-200" />
              </button>


                  <button
                    onClick={handlePolicyClick}
                    className="px-4 py-2 text-white/80 hover:text-white font-medium rounded-lg"
                  >
                    Privacy Policy
                  </button>

                  <Button
                    className="w-full mt-2 bg-gradient-to-r from-sky-400 to-pink-400 text-white font-bold rounded-full py-2 hover:shadow-[0_0_12px_rgba(56,189,248,0.55)]"
                    onClick={handlePlayOnlineClick}
                  >
                    Play Online
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
