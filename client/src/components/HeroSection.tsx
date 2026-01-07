import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroBg from "@assets/bg/bg.png";
import featuredBg from "@assets/games/gamefeature.png";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-background/60 to-background">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.16),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Headline */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div {...fadeIn(0)}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ring-1 ring-white/10 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-white">Pixel Bound Games.</span> <span className="text-primary"></span>
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
              {...fadeIn(0.1)}
            >
              From First Pixel to
              <br />
              <span className="text-primary">Global Rank.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
              {...fadeIn(0.2)}
            >
              We develop casual, AA casual, and puzzle games for mobile—creating addictive gameplay,
              polished experiences, and memorable moments that keep players coming back.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0"
              {...fadeIn(0.3)}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base font-semibold px-5 sm:px-6 lg:px-8 shadow-lg shadow-primary/30"
                onClick={() => scrollToSection("games")}
              >
                View our games
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base font-semibold px-5 sm:px-6 lg:px-8 border-white/20 text-white hover:bg-white/10"
                onClick={() => scrollToSection("contact")}
              >
                Start a project
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-2xl mx-auto lg:mx-0 pt-4 px-4 sm:px-0"
              {...fadeIn(0.4)}
            >
              {[
                { label: "Games launched", value: "12+" },
                { label: "Monthly players", value: "1M+" },
                { label: "Avg. rating", value: "4.7★" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-2 sm:px-4 py-2 sm:py-3 text-left shadow-inner shadow-white/5 backdrop-blur"
                >
                  <div className="text-[10px] sm:text-xs uppercase tracking-wide text-white/60 leading-tight">{stat.label}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Feature spotlight */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
          >
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent blur-3xl opacity-70" />
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
              <div
               className="aspect-[4/3] sm:aspect-[16/10] bg-cover bg-center"
               style={{ backgroundImage: `url(${featuredBg})` }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8 gap-2 sm:gap-3">
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Featured world
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Screw it 3D</div>
                <p className="text-white/80 text-xs sm:text-sm lg:text-base max-w-xl">
                  Best sort and match puzzle game! Experience the ultimate puzzle-solving adventure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-white/80 border border-white/10">
                    Puzzle / Mobile
                  </span>
                  <span className="rounded-full bg-white/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-white/80 border border-white/10">
                    Unity
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 left-8 hidden sm:block">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur shadow-lg">
                <div className="text-xs uppercase tracking-wide text-white/70">Now in soft launch</div>
                <div className="text-lg font-semibold text-white">Climbing Top 100</div>
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
