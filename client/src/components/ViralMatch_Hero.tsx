import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import featuredGame from "@assets/featured_game/feature.png";
import heroBg from "@assets/bg/vm_bg.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-[Montserrat,sans-serif]">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-sky-950/80" />

      {/* Floating Particles (animated glow dots) */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bg-sky-400/60 rounded-full blur-sm"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full container mx-auto px-6 sm:px-8 lg:px-12 py-20 gap-16 lg:gap-24">
        {/* LEFT SIDE */}
        <motion.div
          className="text-center lg:text-left text-white space-y-8 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-violet-400 animate-gradient-x">
              WELCOME TO
            </span>
            <span className="block text-7xl sm:text-8xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-sky-400 to-purple-400 animate-gradient-x">
              Viral Match
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Help Vivi rise to fame — go viral, conquer challenges, and become a top influencer!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-sky-400 text-white border-2 border-sky-400 hover:bg-sky-500 hover:border-sky-500 rounded-full px-6 py-2 text-base font-semibold shadow-lg shadow-sky-500/30 transition"
                onClick={() => scrollToSection("games")}
              >
                Explore
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — FEATURED GAME */}
        <motion.div
          className="relative flex justify-center lg:justify-end items-center w-full"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl hover:shadow-sky-400/40 transition-all duration-500"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.img
              src={featuredGame}
              alt="Featured Game"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-lg">
              <h3 className="text-2xl font-bold">Viral Match 3D</h3>
              <p className="text-sm text-white/80">Featured Game</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
