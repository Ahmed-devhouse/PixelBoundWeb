import { SiUnity, SiUnrealengine, SiBlender, SiCplusplus, SiSharp, SiPython } from "react-icons/si";
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
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            TECHNOLOGY <span className="text-primary">STACK</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading tools and technologies
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">Development Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`tech-${tech.name}`}
                >
                  <Icon className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`platform-${platform.name}`}
                >
                  <Icon className="w-10 h-10 text-primary" />
                  <span className="text-sm font-medium">{platform.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
