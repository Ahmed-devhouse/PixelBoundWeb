import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Game_development_studio_workspace_3c9fdbad.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Subtle Zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Animated Title */}
        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          WE CRAFT
          <br />
          <motion.span
            className="text-primary inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            UNFORGETTABLE
          </motion.span>
          <br />
          GAMING EXPERIENCES
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          Game khel lo hmari, Hassan ne 3 din se khana ni khaya...
        </motion.p>

        {/* Buttons with Staggered Animation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              size="lg"
              className="text-base font-semibold px-8"
              onClick={() => scrollToSection("games")}
              data-testid="button-view-games"
            >
              View Our Games
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold px-8 backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => scrollToSection("about")}
              data-testid="button-learn-more"
            >
              Learn About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles (Subtle Ambient Animation) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <div className="absolute w-2 h-2 bg-primary rounded-full top-1/4 left-1/3 animate-float" />
        <div className="absolute w-3 h-3 bg-white rounded-full bottom-1/3 right-1/4 animate-float-delayed" />
      </motion.div>
    </section>
  );
}
