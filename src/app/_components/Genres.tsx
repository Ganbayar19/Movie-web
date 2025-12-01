import { Button } from "@/src/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Separator } from "@radix-ui/react-separator";
import { Badge, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
};

export const Geners = () => {
  const [geners, setGeners] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGeners = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Autorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json();

      setGeners(data.geners);
    };

    fetchGeners();
  }, []);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genres
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-125" align="start">
        <h1 className="text-lg font-bold">Genres</h1>
        <p className="text-sm">See listsof movies by genre</p>

        <Separator className="my-4" />
        <div className="flex flex-wrap gap-4">
          {geners.map((genre) => (
            <Badge
              key={genre.id}
              className="hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              {genre.name}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Badge>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
