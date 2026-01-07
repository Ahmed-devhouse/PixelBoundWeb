"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import {
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiCplusplus,
  SiSharp,
  SiPython,
} from "react-icons/si";
import { Gamepad2, Monitor, Smartphone, Globe } from "lucide-react";

const technologies = [
  { icon: SiUnity, name: "Unity", description: "Game Engine" },
  { icon: SiUnrealengine, name: "Unreal Engine", description: "3D Engine" },
  { icon: SiBlender, name: "Blender", description: "3D Modeling" },
  { icon: SiCplusplus, name: "C++", description: "Programming" },
  { icon: SiSharp, name: "C#", description: "Development" },
  { icon: SiPython, name: "Python", description: "Scripting" },
];

const platforms = [
  { icon: Monitor, name: "PC", description: "Desktop Games" },
  { icon: Gamepad2, name: "Console", description: "Gaming Consoles" },
  { icon: Smartphone, name: "Mobile", description: "iOS & Android" },
  { icon: Globe, name: "Web", description: "Browser Games" },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function TechStack() {
  return (
    <section id="tech" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background effects matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,126,0,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(255,126,0,0.05),transparent_40%)]" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          {...fadeIn(0)}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/10 backdrop-blur mb-4"
            {...fadeIn(0.1)}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Our Tools
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white px-4">
            TECHNOLOGY <span className="text-primary">STACK</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4">
            Powered by industry-leading tools and technologies that bring our games to life
          </p>
        </motion.div>

        {/* DEVELOPMENT TOOLS */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold mb-8 text-center text-white"
            {...fadeIn(0.1)}
          >
            Development Tools
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_-12px_rgba(255,126,0,0.3)] transition-all duration-500 group cursor-pointer h-full flex flex-col items-center justify-center p-4 sm:p-6">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-colors pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <motion.div
                        className="rounded-xl bg-primary/20 p-3 sm:p-4 border border-primary/30 group-hover:bg-primary/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </motion.div>
                      <div>
                        <span className="text-sm sm:text-base font-bold text-white block group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-xs text-white/60 mt-1 block">
                          {tech.description}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* PLATFORMS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold mb-8 text-center text-white"
            {...fadeIn(0.1)}
          >
            Platforms
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_-12px_rgba(255,126,0,0.3)] transition-all duration-500 group cursor-pointer h-full flex flex-col items-center justify-center p-4 sm:p-6">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-colors pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <motion.div
                        className="rounded-xl bg-primary/20 p-3 sm:p-4 border border-primary/30 group-hover:bg-primary/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </motion.div>
                      <div>
                        <span className="text-sm sm:text-base font-bold text-white block group-hover:text-primary transition-colors">
                          {platform.name}
                        </span>
                        <span className="text-xs text-white/60 mt-1 block">
                          {platform.description}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
