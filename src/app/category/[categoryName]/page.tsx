import { Button } from "@/src/components/ui/button";
import { Movie } from "@/src/components/types";
import { MovieCard } from "../../_components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/src/components/ui/pagination";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Params = {
  categoryName: string;
};

const categoryPage = () => {
  const { categoryName } = useParams<Params>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`  /movie/upcoming?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          accept: "application/json",
        },
      });
      const data = (await res.json()) as Response;

      setMovies(data.results);
    };

    fetchMovies();
  }, [categoryName, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto py-12 space-y-8">
      {loading && (
        <div className="grid grid-cols-5 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <div className="flex justify-end">
        <Pagination className="w-fit m-0">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
