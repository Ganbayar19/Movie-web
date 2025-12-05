import Star from "./Star";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Movie = {
  vote_average: number;
  overview: string;
  title: string;
  backdrop_path: string;
  id: number;
  poster_path: string;
};
export const Upcoming = () => {
  const [coming, setUpcoming] = useState<Movie[]>([]);

  const getUpcoming = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=59e727c8b34f9b1acd7cf78c59abfe03"
      );
      const result = await response.json();
      setUpcoming(result.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUpcoming();
  }, []);
  return (
    <>
      <div className="page-primary py-8 w-full lg:py-13 space-y-8 lg:space-y-13 xl:w-2/3">
        <div className="flex justify-between">
          <h3 className="text-foreground text-2xl font-semibold">Upcoming</h3>
          <Link href={`/category/upcoming`}>
            <h3 className="cursor-pointer flex">
              see more <ArrowRight className="w-4" />
            </h3>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-5">
          {coming.slice(0, 10).map((element, index) => (
            <Link
              href={`/details/${element.id}`}
              // ID={id}
              key={index}
            >
              <div>
                <img
                  className=" h-[300px] w-full object-cover"
                  src={`https://image.tmdb.org/t/p/original${element.poster_path}`}
                />
                <div className="h-[96px] bg-gray-200 dark:bg-gray-900 p-2 text-extrabold">
                  <p className="flex text-foreground text-sm items-center gap-x-1">
                    <Star /> {element.vote_average.toFixed(1)}
                    <span className="text-muted-foreground text-xs">/10</span>
                  </p>
                  <p className="h-14 overflow-hidden text-ellipsis line-clamp-2 text-lg text-foreground">
                    {element.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
