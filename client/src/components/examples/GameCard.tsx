import { GameCard } from '../GameCard'
import gameImage from "@assets/generated_images/Fantasy_RPG_game_screenshot_2cfcf587.png";

export default function GameCardExample() {
  return (
    <GameCard
      title="Epic Quest"
      description="An immersive fantasy RPG with stunning visuals and deep storytelling"
      image={gameImage}
      genre="RPG"
      platform="PC/Console"
    />
  )
}
