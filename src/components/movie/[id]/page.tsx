"use client";

import { MovieCarousel } from "@/src/app/_components/MovieCarousel";
import { MovieSection } from "@/src/app/_components/MovieSection";

const sectionCategories = ["popular", "top_rated", "upcoming"];

const HomePage = () => {
  return (
    <div>
      <MovieCarousel />
      <div className="flex flex-col gap-13 py-13 mx-auto container">
        {sectionCategories.map((category) => (
          <MovieSection key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
