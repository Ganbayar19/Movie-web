"use client";

import { Header } from "./_components/Header";
import { MovieCard } from "./_components/MovieCard";
import { TopBar } from "./_components/TopBar";

const slides = [
  {
    id: 1,
    img: "/Wicked.jpg",
    title: "Wicked",
    rate: "6.9",
    desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
];

const movies = [
  {
    id: 1,
    img: "/dearsanta.jpg",
    name: "Dear Santa",
    rate: "6.9",
  },
];

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
        {slides.map((slide) => (
          <Header
            key={slide.id}
            img={slide.img}
            title={slide.title}
            rate={slide.rate}
            desc={slide.desc}
          />
        ))}
      </div>
      <div className="grid grid-cols-4">
        {[
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.name}
              img={movie.img}
              rate={movie.rate}
            />
          )),
        ]}
      </div>
    </div>
  );
};

export default HomePage;
