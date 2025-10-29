import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Code, Palette, Music, Bug, Rocket } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Add animation library
import { useState } from "react";

export function Capabilities() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const ApplyJob = (id: string) => {
    setSelectedJob(id);
    // You can open a modal or redirect later here
    console.log(`Applied for ${id}`);
  };

  const capabilities = [
    {
      id: "game-design",
      icon: Gamepad2,
      title: "Game Design",
      description: "Need 1 Designer jisko MS Paint ata ho",
    },
    {
      id: "development",
      icon: Code,
      title: "Development",
      description: "Looking for 500 Unpaid Interns :)",
    },
    {
      id: "art-animation",
      icon: Palette,
      title: "Art & Animation",
      description: "n/a",
    },
    {
      id: "qa-testing",
      icon: Bug,
      title: "QA & Testing",
      description: "n/a",
    },
    {
      id: "publishing",
      icon: Rocket,
      title: "Publishing & UA",
      description: "n/a",
    },
  ];

  return (
    <section id="capabilities" className="py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative animated background blur */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/20 animate-pulse" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            WE'RE <span className="text-primary">HIRING</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate? Have what it takes to join an amazing team? Looking forward to welcome you in our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Card
                    className="p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl bg-background/90 backdrop-blur transition-all duration-300 border border-border/40"
                    data-testid={`card-capability-${capability.title}`}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mb-4"
                    >
                      <div className="inline-flex p-3 rounded-xl bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground mb-6">{capability.description}</p>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        size="lg"
                        className={`text-base font-semibold px-8 w-full transition-all ${
                          selectedJob === capability.id ? "bg-primary/80" : ""
                        }`}
                        onClick={() => ApplyJob(capability.id)}
                        data-testid="button-apply-job"
                      >
                        {selectedJob === capability.id ? "Applied ✅" : "Apply Now!"}
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
