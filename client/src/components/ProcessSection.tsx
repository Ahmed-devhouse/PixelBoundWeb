import { Card } from "@/components/ui/card";
import { Lightbulb, Pencil, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Concept",
    description: "We collaborate with you to develop innovative game concepts and mechanics",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Our designers create detailed game design documents and prototypes",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Expert developers bring the vision to life with cutting-edge technology",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous QA ensures a polished, bug-free gaming experience",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We support your game's successful launch and post-release updates",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            DEVELOPMENT <span className="text-primary">PROCESS</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven workflow that transforms ideas into exceptional games
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative" data-testid={`step-${index + 1}`}>
                  <Card className="p-6 text-center hover-elevate transition-all duration-300">
                    <div className="mb-4 flex justify-center">
                      <div className="inline-flex p-4 rounded-full bg-primary text-primary-foreground">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="mb-2 font-bold text-sm text-primary">STEP {index + 1}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
