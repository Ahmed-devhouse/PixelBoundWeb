import { motion } from "framer-motion";
import { SiYoutube } from "react-icons/si";
import { Mail } from "lucide-react";
import logo from "@assets/generated_images/favicon.gif";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <motion.div {...fadeIn(0)}>
            <div className="mb-4">
              <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="font-display text-xl font-bold tracking-tight mb-4">
              <span className="text-primary">PIXEL</span>
              <span className="text-white">BOUND</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Crafting unforgettable gaming experiences since 2017
            </p>
          </motion.div>

          <motion.div {...fadeIn(0.1)}>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-3">
              <motion.button
                onClick={() => scrollToSection("games")}
                className="block text-sm text-white/70 hover:text-primary transition-colors text-left"
                data-testid="link-footer-games"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Games
              </motion.button>
 
              <motion.button
                onClick={() => scrollToSection("about")}
                className="block text-sm text-white/70 hover:text-primary transition-colors text-left"
                data-testid="link-footer-about"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="block text-sm text-white/70 hover:text-primary transition-colors text-left"
                data-testid="link-footer-contact"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact
              </motion.button>
            </div>
          </motion.div>

          <motion.div {...fadeIn(0.15)}>
            {/* Empty column for spacing */}
          </motion.div>

          <motion.div {...fadeIn(0.2)}>
            <h3 className="font-bold mb-4 text-white">Connect</h3>
            <div className="flex gap-3 mb-6">
              <motion.a
                href="https://www.youtube.com/@PixelBoundGames"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 p-3 text-white transition-all group/btn backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-testid="link-footer-youtube"
              >
                <SiYoutube className="w-5 h-5 group-hover/btn:text-red-500 transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover/btn:from-red-500/10 group-hover/btn:to-transparent transition-all pointer-events-none" />
              </motion.a>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-2 border border-primary/30">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <a
                href="mailto:contact@pixelboundgames.com"
                className="text-sm text-white/70 hover:text-primary transition-colors"
              >
                contact@pixelboundgames.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10 text-center"
          {...fadeIn(0.3)}
        >
          <p className="text-sm text-white/60">
            &copy; 2025 Pixel Bound Games LTD. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
