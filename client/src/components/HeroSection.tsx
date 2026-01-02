import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import { RippleButton } from "./RippleButton";
import heroBg from "@assets/bg/bg.png";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-background/60 to-background"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y,
          opacity,
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.16),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 sm:px-8 lg:px-12 py-30 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Headline */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div {...fadeIn(0)}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/10 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                PixelBound Games
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
              {...fadeIn(0.1)}
            >
              Building cinematic worlds
              <br />
              <span className="text-primary">that players remember</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0"
              {...fadeIn(0.2)}
            >
              We design, build, and launch premium game experiences—crafting tight mechanics,
              striking art, and unforgettable worlds across mobile and beyond.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              {...fadeIn(0.3)}
            >
              <Button
                size="lg"
                className="text-base font-semibold px-6 sm:px-8 shadow-lg shadow-primary/30 relative overflow-hidden group"
                onClick={() => scrollToSection("games")}
              >
                <RippleButton className="absolute inset-0" />
                <span className="relative z-10 flex items-center">
                  View our games
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-6 sm:px-8 border-white/20 text-white hover:bg-white/10 relative overflow-hidden group"
                onClick={() => scrollToSection("contact")}
              >
                <RippleButton className="absolute inset-0" />
                <span className="relative z-10 flex items-center">
                  Start a project
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0 pt-4"
              {...fadeIn(0.4)}
            >
              {[
                { label: "Games launched", value: "25+" },
                { label: "Monthly players", value: "3M+" },
                { label: "Avg. rating", value: "4.7★" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left shadow-inner shadow-white/5 backdrop-blur cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4, borderColor: "rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-xs uppercase tracking-wide text-white/60">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Feature spotlight */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent blur-3xl opacity-70" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
              <div
                className="aspect-[4/3] sm:aspect-[16/10] bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 gap-3">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Featured world
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">Viral Match 3D</div>
                <p className="text-white/80 text-sm sm:text-base max-w-xl">
                  A kinetic, neon-soaked puzzle universe blending strategy with pure flow.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/10">
                    Puzzle / Mobile
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/10">
                    Unity
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 left-8 hidden sm:block">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur shadow-lg">
                <div className="text-xs uppercase tracking-wide text-white/70">Now in soft launch</div>
                <div className="text-lg font-semibold text-white">Climbing Top 50</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <div className="h-8 w-[1px] bg-white/30 animate-pulse" />
            Scroll to explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}
