import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-display text-xl font-bold tracking-tight">
              <span className="text-primary">PIXEL</span>
              <span className="text-foreground">BOUND</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("games")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-games"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-capabilities"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              className="hidden md:flex"
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("games")}
              className="text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-games"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-capabilities"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <Button
              className="w-full mt-2"
              onClick={() => scrollToSection("contact")}
              data-testid="button-mobile-get-started"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
