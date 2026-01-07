"use client";

import { Card } from "@/components/ui/card";
import { Users, Trophy, Gamepad2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { icon: Gamepad2, value: "12+", label: "Games Shipped" },
  { icon: Users, value: "1M+", label: "Monthly Players" },
  { icon: Trophy, value: "4.7★", label: "Avg. Rating" },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.08),transparent_40%)]" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE - TEXT CONTENT */}
          <motion.div {...fadeIn(0)}>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/10 backdrop-blur mb-6"
              {...fadeIn(0.1)}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Our Story
            </motion.div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-0">
              ABOUT <span className="text-primary">PIXEL BOUND</span>
            </h2>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-white/80 leading-relaxed px-4 sm:px-0">
              <p>
                Pixel Bound is a mobile games development studio that specializes
                in creating engaging mobile games across multiple genres.
              </p>
              <p>
                We develop mobile games in casual, AA casual, puzzle, match-2,
                and match-3 genres, bringing innovative gameplay experiences to
                players worldwide.
              </p>
              <p>
                Our team combines technical excellence with creative innovation
                to deliver games that captivate and entertain mobile gamers
                everywhere.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - STATS CARDS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
            {...fadeIn(0.2)}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 p-6 text-center group">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-colors pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="rounded-xl bg-primary/20 p-3 border border-primary/30 group-hover:bg-primary/30 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div
                        className="text-3xl lg:text-4xl font-bold font-display mb-2 text-white"
                        data-testid={`text-stat-value-${stat.label}`}
                      >
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div
                        className="text-sm text-white/70 uppercase tracking-wide"
                        data-testid={`text-stat-label-${stat.label}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
