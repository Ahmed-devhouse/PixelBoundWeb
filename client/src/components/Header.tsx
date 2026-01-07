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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-lg backdrop-blur-xl"
          : "bg-background/60 shadow-md backdrop-blur-md"
      } rounded-full border border-border/40 px-6 py-2 w-[90%] max-w-5xl`}
    >
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            if (location !== "/") {
              setLocation("/");
            } else {
              scrollToSection("top");
            }
          }}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <div className="font-display text-lg font-bold tracking-tight">
            <span className="text-primary">PIXEL</span>
            <span className="text-foreground">BOUND</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
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

          {/* 🟣 Viral Match Button 
          <MagneticButton
            onClick={handleViralMatchClick}
            className="bg-sky-400 text-white border-2 border-sky-400 hover:bg-sky-500 hover:border-sky-500 rounded-full px-4 py-1 text-sm font-semibold transition shadow-lg shadow-sky-400/30"
          >
            Viral Match
          </MagneticButton>*/}
        </nav> 

       {/* Right Side Buttons 
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        */}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 rounded-2xl border bg-background/95 backdrop-blur-xl shadow-lg p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("top")}
              className="text-left px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("games")}
              className="text-left px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-left px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            >
              Contact
            </button>

            {/* 🟣 Viral Match Button in Mobile Menu */}
            <Button
              className="w-full mt-2 bg-primary text-white hover:bg-primary/90"
              onClick={handleViralMatchClick}
            >
              Viral Match
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
