import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/generated_images/favicon.gif";

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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViralMatchClick = () => {
    window.location.href = "/viral-match"; // open in same tab
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
          onClick={() => scrollToSection("top")}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <div className="font-retrokia text-lg font-bold tracking-wide uppercase">
            <span className="text-primary">Viral</span>{" "}
            <span className="text-foreground">Match</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("top")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>

          {/* Light Blue Button */}
          <Button
            onClick={handleViralMatchClick}
            className="bg-sky-400 text-white border-2 border-sky-400 hover:bg-sky-500 hover:border-sky-500 rounded-full px-4 py-1 text-sm font-semibold transition"
          >
            Viral Match
          </Button>
        </nav>

        {/* Right Side Buttons */}
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
            <Button
              className="w-full mt-2 bg-sky-400 text-white hover:bg-sky-500 border-2 border-sky-400 hover:border-sky-500 rounded-full"
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
