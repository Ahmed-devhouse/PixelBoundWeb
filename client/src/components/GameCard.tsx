import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  genre: string;
  platform: string;
}

export function GameCard({ title, description, image, genre, platform }: GameCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <Badge variant="secondary" data-testid={`badge-genre-${title}`}>
            {genre}
          </Badge>
          <Badge variant="secondary" data-testid={`badge-platform-${title}`}>
            {platform}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2" data-testid={`text-game-title-${title}`}>
          {title}
        </h3>
        <p className="text-muted-foreground" data-testid={`text-game-description-${title}`}>
          {description}
        </p>
      </div>
    </Card>
  );
}
