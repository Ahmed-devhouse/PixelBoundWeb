import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  genre: string;
  platform: string;
  playStoreLink?: string;
  appStoreLink?: string;
}

export function GameCard({
  title,
  description,
  image,
  genre,
  platform,
  playStoreLink = "#",
  appStoreLink = "#",
}: GameCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group flex flex-col relative">
      {/* Game Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3">
          <Badge variant="secondary">{genre}</Badge>
          <Badge variant="secondary">{platform}</Badge>
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-muted-foreground mb-12">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 absolute bottom-4 right-4 bg-transparent z-10">
        <Button
  size="sm"
  variant="outline"
  className="flex items-center gap-2 shadow-none bg-background/90 backdrop-blur-sm hover:bg-background border-none ring-0 focus:ring-0 focus:outline-none"
  asChild
        >
          <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
            <SiGoogleplay className="w-4 h-4" />
            Play Store
          </a>
        </Button>

        <Button
  size="sm"
  variant="outline"
  className="flex items-center gap-2 shadow-none bg-background/90 backdrop-blur-sm hover:bg-background border-none ring-0 focus:ring-0 focus:outline-none"
  asChild
        >
          <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
            <SiAppstore className="w-4 h-4" />
            App Store
          </a>
        </Button>
      </div>
    </Card>
  );
}
