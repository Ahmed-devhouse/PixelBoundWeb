import { SiX, SiDiscord, SiLinkedin, SiYoutube } from "react-icons/si";
import logo from "@assets/generated_images/favicon.gif";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social and logo links
  const links = {
    website: "https://pixelbound.games", // 👈 replace with your actual homepage
    x: "https://twitter.com/PixelBoundGames",
    discord: "https://discord.gg/yourdiscordlink",
    linkedin: "https://linkedin.com/company/pixelboundgames",
    youtube: "https://youtube.com/@PixelBoundGames",
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div>
            <button
              onClick={() => (window.location.href = "/")}
              className="focus:outline-none"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 object-contain transition-transform hover:scale-105"
              />
            </button>

            <div className="font-display text-xl font-bold tracking-tight mb-4">
              <span className="text-primary">PIXEL</span>
              <span className="text-foreground">BOUND</span>
              <span className="text-foreground"> games</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting unforgettable gaming experiences since 2013
            </p>
          </div>

          <div></div>
          <div></div>

          {/* Socials */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <button
                className="p-2 rounded-lg hover-elevate active-elevate-2"
                onClick={() => (window.location.href = links.x)}
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-lg hover-elevate active-elevate-2"
                onClick={() => (window.location.href = links.discord)}
                aria-label="Discord"
              >
                <SiDiscord className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-lg hover-elevate active-elevate-2"
                onClick={() => (window.location.href = links.linkedin)}
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-lg hover-elevate active-elevate-2"
                onClick={() => (window.location.href = links.youtube)}
                aria-label="YouTube"
              >
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
