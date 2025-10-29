import { motion } from "framer-motion";
import { GameCard } from "./GameCard";
import fantasyGame from "@assets/generated_images/Fantasy_RPG_game_screenshot_2cfcf587.png";
import spaceGame from "@assets/generated_images/Space_combat_game_screenshot_5eaf1e78.png";
import racingGame from "@assets/generated_images/Cyberpunk_racing_game_screenshot_fe78e07f.png";
import puzzleGame from "@assets/generated_images/Puzzle_adventure_game_screenshot_d53b3d29.png";
import googlePlay from "@assets/icons/google-play-badge.png";
import appStore from "@assets/icons/app-store-badge.png";

const games = [
  {
    title: "Game 1",
    description:
      "An epic fantasy RPG with stunning visuals, deep character customization, and a rich storyline that spans multiple realms.",
    image: fantasyGame,
    genre: "RPG",
    platform: "PC/Console",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.game1",
    appStoreUrl: "https://apps.apple.com/app/id1234567890",
  },
  {
    title: "Game 2",
    description:
      "Fast-paced space combat with strategic gameplay. Command your fleet through intense battles across the galaxy.",
    image: spaceGame,
    genre: "Space Combat",
    platform: "PC/Console",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.game2",
    appStoreUrl: "https://apps.apple.com/app/id2345678901",
  },
  {
    title: "Game 3",
    description:
      "High-octane cyberpunk racing through neon-lit streets. Customize your ride and dominate the underground racing scene.",
    image: racingGame,
    genre: "Racing",
    platform: "PC/Mobile",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.game3",
    appStoreUrl: "https://apps.apple.com/app/id3456789012",
  },
  {
    title: "Game 4",
    description:
      "A charming puzzle adventure set in a magical world. Solve intricate puzzles and uncover ancient secrets.",
    image: puzzleGame,
    genre: "Puzzle",
    platform: "All Platforms",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.game4",
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
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            FEATURED <span className="text-primary">GAMES</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of award-winning titles that have captivated players worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
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
                <div className="absolute bottom-4 right-4 flex gap-2">
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
      </div>
    </section>
  );
}
