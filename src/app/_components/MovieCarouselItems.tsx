"use client";
import { CarouselItem } from "@/src/components/ui/carousel";
type Movie = {
  id: number;
  name: string;
};
import { Image } from "lucide-react";

type MovieCarouselItemProps = {
  movie: Movie;
};

export const MovieCarouselItem = ({ movie }: MovieCarouselItemProps) => {
  const { backdrop_path, title } = movie;

  const imageUrl =
    process.env.IMAGE_BASE_URL?.replace("w500", "original") + backdrop_path;

  return (
    <CarouselItem>
      <div className="w-full relative pt-[40%]">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
    </CarouselItem>
  );
};
