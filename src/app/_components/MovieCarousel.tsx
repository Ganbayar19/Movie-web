"use client";

import { useEffect, useState } from "react";
type Movie = {
  id: number;
  name: string;
};
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItems";

export const MovieCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        ` https://api.themoviedb.org/3 /movie/now_playing?language=en-US&page=1`,
        {
          headers: {
            Autorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json();

      setMovies(data.results.slice(0, 5));
    };

    fetchMovies();
  }, []);
  return (
    <Carousel className="relative w-full border border-red-500">
      <CarouselContent>
        {movies.map((movie) => (
          <MovieCarouselItem key={movie.id} movie={movie} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[50%] left-8" />
      <CarouselNext className="absolute top[50%] right-8" />
    </Carousel>
  );
};
