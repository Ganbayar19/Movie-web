import { Button } from "@/src/components/ui/button";
import { Geners } from "./Genres";
import { Moon } from "lucide-react";
import { MovieSerch } from "./MovieSearch";

export const Header = () => {
  return (
    <div className="w-screen bg-white">
      <div className="container mx-auto flex items-center h-15">
        <div className="w-50">Movie Z</div>

        <div className="flex-1 flex justify-center items-center gap-4">
          <Geners />
          <MovieSerch />
        </div>
        <div className="w-50 flex justify-end">
          <Button size="icon-lg">
            <Moon />
          </Button>
        </div>
      </div>
    </div>
  );
};
