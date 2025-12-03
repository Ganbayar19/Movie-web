"use client";

import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "@/src/components/types";
import Link from "next/link";

export const MovieSection = ({ category }: MovieSectionProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fechMovies = async () => {
      const res = await fetch(
        ` https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json();

      setMovies(data.results.slice(0, 10));
    };

    fetchMovies();
  }, [category]);

  return (
    <div className="w-full gap-8 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold capitalize">
          {category.replace("_", " ")}
        </h2>
        <Link
          href={`/category/${category}`}
          className="text-blue-500 hover:underline"
        >
          See ALL
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
