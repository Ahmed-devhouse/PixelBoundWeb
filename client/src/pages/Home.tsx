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
import { ScrollProgress } from "@/components/ScrollProgress";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash-based navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # symbol
      
      // Wait for DOM to be ready, then scroll to section
      const scrollToHashSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToHashSection()) {
        // If element not found, try again after a delay
        setTimeout(() => {
          scrollToHashSection();
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
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
