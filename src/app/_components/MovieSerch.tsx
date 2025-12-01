import { Input } from "@/src/components/ui/input";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { ChangeEvent, useEffect, useState } from "react";
type Movie = {
  id: number;
  name: string;
};

export const MovieSerch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const res = await fetch(
        ` https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
        {
          headers: {
            Autorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [query]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Input
          value={query}
          onChange={handleChange}
          className="w-100! absolute -top-10"
        />
        <div className="w-full max-h-150 rounded-md overflow-scroll">
          {loading && <p className="p-4 text-center">Loading...</p>}

          {!loading && movies.length === 0 && (
            <p className="p-4 text-center">No results found. </p>
          )}

          {!loading && movies.map((movie) => <MovieSerchCard key={movie.id} movie={movie} />)}
        </div>
      </PopoverTrigger>
    </Popover>
  );
};
