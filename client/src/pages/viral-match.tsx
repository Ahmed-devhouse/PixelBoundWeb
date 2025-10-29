import { Header } from "@/components/ViralMatch_Header";
import { HeroSection } from "@/components/ViralMatch_Hero";
 
import { Footer } from "@/components/ViralMatch_Footer";

export default function ViralMatch() {
  return (
    <div className="min-h-screen">
         <Header />
         <main>
           <HeroSection />
         </main>
         <Footer />
       </div>
  );
}