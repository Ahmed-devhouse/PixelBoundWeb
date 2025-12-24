import { SiYoutube } from "react-icons/si";
import logo from "@assets/generated_images/favicon.gif";
import logoViral from "@assets/vivi/icongif.gif";


export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Added 'dark' and specific zinc colors to keep it dark mode consistent
    <footer className="dark border-t border-white/10 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Changed to justify-between to push the two identical parts to the corners */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-8">
          
          {/* Left Side */}
          <div className="max-w-xs">
            <button
              onClick={() => (window.location.href = "/")}
              className="focus:outline-none mb-4"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 object-contain transition-transform hover:scale-105"
              />
            </button>

            <div className="font-display text-xl font-bold tracking-tight mb-2">
              <span className="text-primary">PIXEL</span>
              <span className="text-white">BOUND</span>
              <span className="text-white/60"> games</span>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Crafting unforgettable gaming experiences since 2013.
            </p>

            <a 
              href="https://www.youtube.com/@PixelBoundGames" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors inline-block"
            >
              <SiYoutube className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Right Side (Mirroring the Left) */}
          <div className="max-w-xs md:text-right flex flex-col md:items-end">
            <button
              onClick={() => (window.location.href = "/")}
              className="focus:outline-none mb-4"
            >
              <img
                src={logoViral}
                alt="Logo"
                className="w-16 h-16 object-contain transition-transform hover:scale-105"
              />
            </button>

            <div className="font-display text-xl font-bold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
                Viral
              </span>{" "}
              <span className="text-white">Match</span>
            
            </div>
            <p className="text-sm text-zinc-400 mb-4">
             Help Vivi go viral and become the next top influencer!
            </p>

            <a 
              href="https://www.youtube.com/@ViviAndFriend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors inline-block"
            >
              <SiYoutube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
          <p>&copy; 2025 Pixel Bound Games LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}