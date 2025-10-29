"use client";

import { Card } from "@/components/ui/card";
import { Lightbulb, Pencil, Code2, TestTube, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Lightbulb,
    title: "Concept",
    description:
      "We collaborate with you to develop innovative game concepts and mechanics",
  },
  {
    icon: Pencil,
    title: "Design",
    description:
      "Our designers create detailed game design documents and prototypes",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Expert developers bring the vision to life with cutting-edge technology",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous QA ensures a polished, bug-free gaming experience",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We support your game's successful launch and post-release updates",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 relative">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            DEVELOPMENT <span className="text-primary">PROCESS</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven workflow that transforms ideas into exceptional games
          </p>
        </div>

        {/* Connecting line for large screens */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  data-testid={`step-${index + 1}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      boxShadow:
                        "0px 10px 25px rgba(0, 0, 0, 0.15), 0 0 20px rgba(var(--primary-rgb), 0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  >
                    <Card className="p-6 text-center rounded-2xl bg-background/60 backdrop-blur-md border-border/40 hover:border-primary/50 transition-all duration-300">
                      <div className="mb-4 flex justify-center">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="mb-2 font-bold text-sm text-primary">
                        STEP {index + 1}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
