import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { RippleButton } from "./RippleButton";
import feature_game1 from "@assets/games/game1.png";
import feature_game2 from "@assets/games/game2.png";
import feature_game3 from "@assets/games/game3.png";
import feature_game4 from "@assets/games/game4.png";
import feature_game5 from "@assets/games/game5.png";
import feature_game6 from "@assets/games/game6.png";

const games = [
  {
    title: "Viral Match 3D",
    description: "Help Vivi get viral!",
    image: feature_game6,
    genre: "Puzzle/Building",
    platform: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.ScrewIt3D.screwmaster.screwit&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id1234567890",
    showGooglePlay: true, // Set to false to hide Google Play button
    showAppStore: false, // Set to false to hide App Store button
    isAvailable: false, // Set to false to hide the entire card
  },
  {
    title: "Screw it 3D",
    description: "Best sort and match puzzle game!",
    image: feature_game1,
    genre: "Puzzle",
    platform: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.ScrewIt3D.screwmaster.screwit&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id1234567890",
    showGooglePlay: true,
    showAppStore: false,
    isAvailable: true,
  },
  {
    title: "Slime 3D : Hexagon Merge Color",
    description: "🎮 Sort and Merge Hexagon tiles!",
    image: feature_game2,
    genre: "Tiles Color Match / Idle Clicker",
    platform: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=slime.hexagon.colorsortgames&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id2345678901",
    showGooglePlay: true,
    showAppStore: false,
    isAvailable: true,
  },
  {
    title: "Real Bike Driving City 3D",
    description: "The Ultimate Motorcycle Racing 3D Game 🏁",
    image: feature_game3,
    genre: "Racing",
    platform: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.wodh.real.moto.race.world.racing.world&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id3456789012",
    showGooglePlay: true,
    showAppStore: false,
    isAvailable: true,
  },
  {
    title: "Luminara : Puzzle Adventure",
    description: "A Journey of Light.",
    image: feature_game4,
    genre: "Puzzle",
    platform: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.WODH.Luminara.AJourneyofLight&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id4567890123",
    showGooglePlay: true,
    showAppStore: true,
    isAvailable: false,
  },
  {
    title: "Seat Color Sort Jam 3D Puzzle",
    description: "The Ultimate 3D Color Puzzle Game!",
    image: feature_game5,
    genre: "Puzzle",
    platform: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.WODH.SeatColorSortJam&hl=en",
    appStoreUrl: "https://apps.apple.com/app/id4567890123",
    showGooglePlay: true,
    showAppStore: false,
    isAvailable: false,
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function FeaturedGames() {
  return (
    <section id="games" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background effects matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          {...fadeIn(0)}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white px-4">
            Our <span className="text-primary">GAMES</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4">
            Explore our portfolio of award-winning titles that have captivated
            players worldwide
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {games.filter(game => game.isAvailable !== false).map((game, index) => (
            <motion.div
              key={game.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <TiltCard intensity={10}>
                <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group h-full flex flex-col">
                {/* Game Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Genre Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                      {game.genre}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 leading-relaxed flex-grow">
                    {game.description}
                  </p>

                  {/* Modern Store Buttons */}
                  {(game.showGooglePlay !== false || game.showAppStore !== false) && (
                    <div className={`flex ${game.showGooglePlay !== false && game.showAppStore !== false ? 'flex-col sm:flex-row' : ''} gap-2 mt-auto`}>
                      {game.showGooglePlay !== false && (
                        <a
                          href={game.googlePlayUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all group/btn rounded-lg overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3"
                        >
                          <RippleButton className="absolute inset-0" />
                          <SiGoogleplay className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform relative z-10" />
                          <span className="text-[10px] sm:text-xs font-semibold relative z-10">Google Play</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-60 group-hover/btn:opacity-100 transition-opacity relative z-10" />
                        </a>
                      )}

                      {game.showAppStore !== false && (
                        <a
                          href={game.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all group/btn rounded-lg overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3"
                        >
                          <RippleButton className="absolute inset-0" />
                          <SiAppstore className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform relative z-10" />
                          <span className="text-[10px] sm:text-xs font-semibold relative z-10">App Store</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-60 group-hover/btn:opacity-100 transition-opacity relative z-10" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-colors pointer-events-none" />
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* 🎥 Game Trailer Section */}
        <motion.div
          className="mt-24 text-center relative"
          {...fadeIn(0.2)}
        >
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white px-4">
            Watch Our <span className="text-primary">Game Trailers</span>
          </h3>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Dive into the excitement with our featured trailers showcasing the thrill, puzzles, and adventure.
          </p>

          {/* 3-Video Showcase */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-4">
            {/* Left Small Video */}
            <motion.div
              className="w-full sm:w-[85%] md:w-[25%] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] opacity-70 hover:opacity-100 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/IcnrO45Afcg?si=rmP_tsc2aOflX9Kg"
                title="Trailer 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Center Main Video */}
            <motion.div
              className="w-full sm:w-[95%] md:w-[40%] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/30 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(99,102,241,0.4)] z-10"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-RTGaZBeKW0?si=v8x_cK6A2IzdMXx_"
                title="Main Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Right Small Video */}
            <motion.div
              className="w-full sm:w-[85%] md:w-[25%] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] opacity-70 hover:opacity-100 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/IcnrO45Afcg?si=rmP_tsc2aOflX9Kg"
                title="Trailer 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
