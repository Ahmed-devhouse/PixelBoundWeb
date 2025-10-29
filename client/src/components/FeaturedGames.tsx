import { motion } from "framer-motion";
import { GameCard } from "./GameCard";
import feature_game1 from "@assets/games/game1.png";
import feature_game2 from "@assets/games/game2.png";
import feature_game3 from "@assets/games/game3.png";
import feature_game4 from "@assets/games/game4.png";
import feature_game5 from "@assets/games/game5.png";
import feature_game6 from "@assets/games/game6.png";
import googlePlay from "@assets/icons/google-play-badge.png";
import appStore from "@assets/icons/app-store-badge.png";

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
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

export function FeaturedGames() {
  return (
    <section id="games" className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">GAMES</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
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
          {games.map((game) => (
            <motion.div
              key={game.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                <GameCard {...game} />

                {/* Store Buttons in Bottom Right Corner */}
                <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2">
                  <a
                    href={game.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 transform hover:scale-105 transition-transform"
                  >
                    <img
                      src={googlePlay}
                      alt="Get it on Google Play"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  <a
                    href={game.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 transform hover:scale-105 transition-transform"
                  >
                    <img
                      src={appStore}
                      alt="Download on the App Store"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🎥 Game Trailer Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Watch Our <span className="text-primary">Game Trailers</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dive into the excitement with our featured trailers showcasing the thrill, puzzles, and adventure.
          </p>

          {/* 3-Video Showcase */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
            {/* Left Small Video */}
            <motion.div
              className="w-[85%] md:w-[25%] aspect-video rounded-2xl overflow-hidden shadow-xl opacity-70 hover:opacity-100 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Hgm5Wr7Cu50?si=DuoPup9vs7XK9Cp6"
                title="Trailer 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Center Main Video */}
            <motion.div
              className="w-[95%] md:w-[40%] aspect-video rounded-2xl overflow-hidden shadow-2xl z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aS-fkHq0WE8?si=vK6B-kJGQBca6mv7"
                title="Main Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Right Small Video */}
            <motion.div
              className="w-[85%] md:w-[25%] aspect-video rounded-2xl overflow-hidden shadow-xl opacity-70 hover:opacity-100 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4vMclFwi0bc?si=6q_X1OhYmma-xef9"
                title="Trailer 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>

          {/* Optional Gradient Glow Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[60%] bg-gradient-to-t from-background via-transparent to-transparent opacity-50"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
