import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent" />
      <div className="absolute inset-x-6 top-8 bottom-8 rounded-3xl border border-white/5 bg-white/5 blur-3xl opacity-50" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          className="rounded-3xl border border-white/10 bg-background/70 backdrop-blur-xl px-6 sm:px-10 lg:px-14 py-12 lg:py-16 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.6)] text-center space-y-6"
          {...fadeUp(0)}
        >
          <motion.h2
            className="font-display text-4xl lg:text-5xl font-bold text-white"
            {...fadeUp(0.05)}
          >
            Ready to launch your next{" "}
            <span className="text-primary">hit title?</span>
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto"
            {...fadeUp(0.1)}
          >
            Partner with a studio that ships cinematic, high-retention experiences.
            From concept to live-ops, we’ve got your back.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            {...fadeUp(0.15)}
          >
            <Button
              size="lg"
              className="text-base font-semibold px-8 shadow-lg shadow-primary/30"
              onClick={scrollToContact}
              data-testid="button-start-project"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold px-8 border-white/20 text-white hover:bg-white/10"
              onClick={scrollToContact}
              data-testid="button-schedule-consultation"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
