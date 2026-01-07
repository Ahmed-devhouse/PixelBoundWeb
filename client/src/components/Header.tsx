import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { useLocation } from "wouter";
import logo from "@assets/generated_images/favicon.gif";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    // Check if we're on the home page
    const isHomePage = location === "/";
    
    if (!isHomePage) {
      // Navigate to home page with hash for the section
      if (id === "top") {
        setLocation("/");
        // Scroll to top after navigation
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        // Navigate to home with hash
        setLocation(`/#${id}`);
        
        // Wait for navigation and DOM to be ready, then scroll
        const scrollToElement = () => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            return true;
          }
          return false;
        };
        
        // Try immediately
        setTimeout(() => {
          if (!scrollToElement()) {
            // If not found, try again after a longer delay
            setTimeout(() => {
              scrollToElement();
            }, 500);
          }
        }, 100);
      }
    } else {
      // Already on home page, just scroll
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViralMatchClick = () => {
    window.open("/viral-match") //window.location.href = ; // open in same tab
  };

  return (
    <header
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-lg backdrop-blur-xl"
          : "bg-background/60 shadow-md backdrop-blur-md"
      } rounded-full border border-border/40 px-3 sm:px-6 py-2 w-[95%] sm:w-[90%] max-w-5xl`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo and Title */}
        <div
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          onClick={() => {
            if (location !== "/") {
              setLocation("/");
            } else {
              scrollToSection("top");
            }
          }}
        >
          <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <div className="font-display text-base sm:text-lg font-bold tracking-tight leading-none">
            <span className="text-primary">PIXEL</span>
            <span className="text-foreground">BOUND</span>
          </div>
        </div>

        {/* Desktop Navigation - Aligned to Right */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
          {[
            { id: "top", label: "Home" },
            { id: "games", label: "Games" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav> 

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 md:ml-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 rounded-2xl border bg-background/95 backdrop-blur-xl shadow-lg p-4 md:hidden z-50">
          <nav className="flex flex-col gap-2">
            {[
              { id: "top", label: "Home" },
              { id: "games", label: "Games" },
              { id: "about", label: "About" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 text-left rounded-md hover:bg-accent"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
