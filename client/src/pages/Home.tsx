import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedGames } from "@/components/FeaturedGames";
import { Capabilities } from "@/components/Capabilities";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStack } from "@/components/TechStack";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedGames />
        <AboutSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
