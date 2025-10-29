import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import featuredGame from "@assets/featured_game/feature.png";
import heroBg from "@assets/generated_images/Game_development_studio_workspace_3c9fdbad.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-background/90" />

      {/* Diagonal Split (Hidden on small screens) */}
      <div className="absolute inset-0 hidden lg:block clip-diagonal bg-background/40 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full container mx-auto px-6 sm:px-8 lg:px-12 py-20 gap-16 lg:gap-24">
        {/* Left Side — Text & Buttons */}
        <motion.div
          className="text-center lg:text-left text-white space-y-6 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
            WE CRAFT
            <br />
            <span className="text-primary">UNFORGETTABLE</span>
            <br />
            GAMING EXPERIENCES
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            Step into worlds we’ve built with passion and precision — where every pixel tells a story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="text-base font-semibold px-8"
                onClick={() => scrollToSection('games')}
              >
                View Our Games
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8 backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => scrollToSection('about')}
              >
                Learn About Us
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side — Featured Game */}
        <motion.div
          className="relative flex justify-center lg:justify-end items-center w-full"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[16/9]">
            <motion.img
              src={featuredGame}
              alt="Featured Game"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Screw it 3D</h3>
              <p className="text-sm sm:text-base text-white/80">Best sort and match puzzle game</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
