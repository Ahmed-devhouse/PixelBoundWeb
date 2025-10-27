import { Button } from "@/components/ui/button";

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
          READY TO BRING YOUR <span className="text-primary">GAME TO LIFE?</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's collaborate to create an unforgettable gaming experience. Our team is ready to turn your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-base font-semibold px-8"
            onClick={scrollToContact}
            data-testid="button-start-project"
          >
            Start a Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold px-8"
            onClick={scrollToContact}
            data-testid="button-schedule-consultation"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
