import { SiX, SiDiscord, SiLinkedin, SiYoutube } from "react-icons/si";
import logo from "@assets/generated_images/favicon.gif";
export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
              <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <div className="font-display text-xl font-bold tracking-tight mb-4">
              <span className="text-primary">PIXEL</span>
              <span className="text-foreground">BOUND</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting unforgettable gaming experiences since 2013
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("games")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-games"
              >
                Games
              </button>
              <button
                onClick={() => scrollToSection("capabilities")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-capabilities"
              >
                Career
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4"></h3>
            <div className="space-y-2 text-sm text-muted-foreground">
 
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-footer-twitter">
                <SiX className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-footer-discord">
                <SiDiscord className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-footer-linkedin">
                <SiLinkedin className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-footer-youtube">
                <SiYoutube className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              hello@pixelbound.games
            </p>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Pixel Bound Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
