"use client";

import { Card } from "@/components/ui/card";
import { Users, Trophy, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Gamepad2, value: "15+", label: "Games Shipped" },
  { icon: Users, value: "500K+", label: "Players Worldwide" },
  { icon: Trophy, value: "12", label: "Industry Awards" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-card/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              ABOUT <span className="text-primary">PIXEL BOUND</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by passionate gamers and industry veterans, Pixel Bound
                Games has been crafting extraordinary gaming experiences for
                over a decade.
              </p>
              <p>
                Our diverse team of designers, developers, artists, and
                storytellers combines technical excellence with creative
                innovation to deliver games that resonate with players
                worldwide.
              </p>
              <p>
                From indie darlings to AAA blockbusters, we've proven our
                ability to bring any vision to life, no matter the scope or
                platform.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - STATS CARDS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
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
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    y: -6,
                    boxShadow:
                      "0px 10px 25px rgba(0, 0, 0, 0.15), 0 0 20px rgba(var(--primary-rgb), 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <Card className="p-6 text-center rounded-2xl bg-background/60 backdrop-blur-md border-border/40 hover:border-primary/50 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div
                      className="text-3xl lg:text-4xl font-bold font-display mb-1"
                      data-testid={`text-stat-value-${stat.label}`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm text-muted-foreground"
                      data-testid={`text-stat-label-${stat.label}`}
                    >
                      {stat.label}
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
