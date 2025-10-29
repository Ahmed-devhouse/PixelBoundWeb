"use client";

import { motion } from "framer-motion";
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
  { icon: SiUnity, name: "Unity" },
  { icon: SiUnrealengine, name: "Unreal Engine" },
  { icon: SiBlender, name: "Blender" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiSharp, name: "C#" },
  { icon: SiPython, name: "Python" },
];

const platforms = [
  { icon: Monitor, name: "PC" },
  { icon: Gamepad2, name: "Console" },
  { icon: Smartphone, name: "Mobile" },
  { icon: Globe, name: "Web" },
];

export function TechStack() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            TECHNOLOGY <span className="text-primary">STACK</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading tools and technologies
          </p>
        </motion.div>

        {/* DEVELOPMENT TOOLS */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">
            Development Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/60 backdrop-blur-md border border-border/40 text-center transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.2), 0 0 20px rgba(var(--primary-rgb),0.25)",
                  }}
                >
                  <Icon className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PLATFORMS */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40 text-center transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.2), 0 0 20px rgba(var(--primary-rgb),0.25)",
                  }}
                >
                  <Icon className="w-10 h-10 text-primary" />
                  <span className="text-sm font-medium">{platform.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
