import { useEffect } from "react";
import { Header } from "@/components/ViralMatch_Header";
import { HeroSection } from "@/components/ViralMatch_Hero";
import { Story } from "@/components/ViralMatch_Story";
import { Games } from "@/components/ViralMatch_Games";
import { Footer } from "@/components/ViralMatch_Footer";
import { ViralMatchStatsBar } from "@/components/ViralMatch_StatsBar";
import { ViralMatchProvider, useViralMatch } from "@/contexts/ViralMatchContext";

function ViralMatchContent() {
  const { updateStats } = useViralMatch();

  // Initialize with starting followers on mount
  useEffect(() => {
    updateStats({ followers: 125000 });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <ViralMatchStatsBar />
      <main>
        <HeroSection />
        <Story />
        <Games />
      </main>
      <Footer />
    </div>
  );
}

export default function ViralMatch() {
  return (
    <ViralMatchProvider>
      <ViralMatchContent />
    </ViralMatchProvider>
  );
}