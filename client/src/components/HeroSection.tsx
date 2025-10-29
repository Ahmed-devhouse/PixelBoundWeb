import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Game_development_studio_workspace_3c9fdbad.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
          WE CRAFT
          <br />
          <span className="text-primary">UNFORGETTABLE</span>
          <br />
          GAMING EXPERIENCES
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Game khel lo hmari, Hassan ne 3 din se khana ni kahaya...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-base font-semibold px-8"
            onClick={() => scrollToSection("games")}
            data-testid="button-view-games"
          >
            View Our Games
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold px-8 backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => scrollToSection("about")}
            data-testid="button-learn-more"
          >
            Learn About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
