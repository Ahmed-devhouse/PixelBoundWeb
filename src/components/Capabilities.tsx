import { Card } from "@/components/ui/card";
import { Gamepad2, Code, Palette, Music, Bug, Rocket } from "lucide-react";

const capabilities = [
  {
    icon: Gamepad2,
    title: "Game Design",
    description: "Expert gameplay mechanics and level design that create engaging, memorable experiences for players.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Cutting-edge development using Unity, Unreal Engine, and custom solutions for any platform.",
  },
  {
    icon: Palette,
    title: "Art & Animation",
    description: "Stunning 2D and 3D art, character design, and smooth animations that bring games to life.",
  },
  {
    icon: Music,
    title: "Sound Design",
    description: "Immersive audio experiences with original music, sound effects, and voice acting.",
  },
  {
    icon: Bug,
    title: "QA & Testing",
    description: "Comprehensive testing and quality assurance to ensure polished, bug-free releases.",
  },
  {
    icon: Rocket,
    title: "Publishing Support",
    description: "End-to-end support from concept to launch across all major gaming platforms.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            OUR <span className="text-primary">CAPABILITIES</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-spectrum game development services to bring your vision to reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card
                key={capability.title}
                className="p-6 lg:p-8 hover-elevate transition-all duration-300"
                data-testid={`card-capability-${capability.title}`}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
