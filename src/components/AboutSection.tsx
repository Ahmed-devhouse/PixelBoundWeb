import { Card } from "@/components/ui/card";
import { Users, Trophy, Gamepad2 } from "lucide-react";

const stats = [
  { icon: Gamepad2, value: "15+", label: "Games Shipped" },
  { icon: Users, value: "500K+", label: "Players Worldwide" },
  { icon: Trophy, value: "12", label: "Industry Awards" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              ABOUT <span className="text-primary">PIXEL BOUND</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by passionate gamers and industry veterans, Pixel Bound Games has been crafting extraordinary gaming experiences for over a decade.
              </p>
              <p>
                Our diverse team of designers, developers, artists, and storytellers combines technical excellence with creative innovation to deliver games that resonate with players worldwide.
              </p>
              <p>
                From indie darlings to AAA blockbusters, we've proven our ability to bring any vision to life, no matter the scope or platform.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="p-6 text-center hover-elevate transition-all duration-300"
                  data-testid={`card-stat-${stat.label}`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl lg:text-4xl font-bold font-display mb-1" data-testid={`text-stat-value-${stat.label}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${stat.label}`}>
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
