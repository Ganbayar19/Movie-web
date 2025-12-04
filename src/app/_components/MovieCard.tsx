import { Movie } from "@/src/components/types";
import { Image, Link, Link2 } from "lucide-react";
import { useState } from "react";

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  return (
    <Link>
    <div key={id} className="rounded-lg overflow-hidden">
    </div>
    </Link>
  );
};
