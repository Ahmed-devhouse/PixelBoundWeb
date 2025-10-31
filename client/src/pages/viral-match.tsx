import { Header } from "@/components/ViralMatch_Header";
import { HeroSection } from "@/components/ViralMatch_Hero";
  import { Story } from "@/components/ViralMatch_Story";
 import { Games } from "@/components/ViralMatch_Games";
import { Footer } from "@/components/ViralMatch_Footer";

export default function ViralMatch() {
  return (
    <div className="min-h-screen">
         <Header />
         <main>
           <HeroSection />
           <Story />
           <Games />
         </main>
         <Footer />
       </div>
  );
}