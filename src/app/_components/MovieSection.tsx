"use client";

import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MovieDetail } from "./types/MovieDetailTypes";

type MovieSectionProps = {
  categoryName: string;
  title: string;
  showButton: boolean;
};

export const MovieSection = (props: MovieSectionProps) => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const { categoryName, title, showButton } = props;

  useEffect(() => {
    const fechData = async () => {
      const rec = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-type": "application.json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await rec.json();

      setMovies(data.results);
    };
    fechData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-6xl font-semibold">{title}</p>
        {showButton && (
          <Link href={`/categoy/${categoryName}`}>
            <p>see more</p>
          </Link>
        )}
        <div>
          <div className="grid grid-cols-5 gap-10 ">
            {movies?.slice(0, 10)?.map((el) => (
              <MovieCard
                key={el.id}
                id={el.id}
                backdrop_path={el.backdrop_path}
                title={el.title}
                vote_avareg={el.vote_avareg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
