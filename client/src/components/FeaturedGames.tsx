import { GameCard } from "./GameCard";
import fantasyGame from "@assets/generated_images/Fantasy_RPG_game_screenshot_2cfcf587.png";
import spaceGame from "@assets/generated_images/Space_combat_game_screenshot_5eaf1e78.png";
import racingGame from "@assets/generated_images/Cyberpunk_racing_game_screenshot_fe78e07f.png";
import puzzleGame from "@assets/generated_images/Puzzle_adventure_game_screenshot_d53b3d29.png";

const games = [
  {
    title: "Chronicles of Eternity",
    description: "An epic fantasy RPG with stunning visuals, deep character customization, and a rich storyline that spans multiple realms.",
    image: fantasyGame,
    genre: "RPG",
    platform: "PC/Console",
  },
  {
    title: "Void Runners",
    description: "Fast-paced space combat with strategic gameplay. Command your fleet through intense battles across the galaxy.",
    image: spaceGame,
    genre: "Space Combat",
    platform: "PC/Console",
  },
  {
    title: "Neon Rush",
    description: "High-octane cyberpunk racing through neon-lit streets. Customize your ride and dominate the underground racing scene.",
    image: racingGame,
    genre: "Racing",
    platform: "PC/Mobile",
  },
  {
    title: "Mystic Gardens",
    description: "A charming puzzle adventure set in a magical world. Solve intricate puzzles and uncover ancient secrets.",
    image: puzzleGame,
    genre: "Puzzle",
    platform: "All Platforms",
  },
];

export function FeaturedGames() {
  return (
    <section id="games" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            FEATURED <span className="text-primary">GAMES</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of award-winning titles that have captivated players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
