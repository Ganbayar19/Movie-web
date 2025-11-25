// "use client";

// import { Footer } from "./_components/Footer";
// import { Header } from "./_components/Header";
// import { MovieCard } from "./_components/MovieCard";
// import { TopBar } from "./_components/TopBar";
// import {}

//  export const slides = [
//   {
//     id: 1,
//     img: "/Wicked.jpg",
//     title: "Wicked",
//     rate: "6.9",
//     desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//   },
//   {
//     id: 1,
//     img: "/Wicked.jpg",
//     title: "Wicked",
//     rate: "6.9",
//     desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//   },
//   {
//     id: 1,
//     img: "/Wicked.jpg",
//     title: "Wicked",
//     rate: "6.9",
//     desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//   },
// ];

//  export const upcomingMovies = [
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 2,
//     img: "/dragon.jpg",
//     name: "How To Train Your Dragon Live Action",
//     rate: "6.9",
//   },
//   {
//     id: 3,
//     img: "/alien.jpg",
//     name: "Alien Romulus",
//     rate: "6.9",
//   },
//   {
//     id: 4,
//     img: "/ashes.jpg",
//     name: "From the Ashes",
//     rate: "6.9",
//   },
//   {
//     id: 5,
//     img: "/spacedogg.jpg",
//     name: "Space Dogg",
//     rate: "6.9",
//   },
//   {
//     id: 6,
//     img: "/theolder.jpg",
//     name: "The Older",
//     rate: "6.9",
//   },
//   {
//     id: 7,
//     img: "/y2k.jpg",
//     name: "Y2K",
//     rate: "6.9",
//   },
//   {
//     id: 8,
//     img: "/leveling.jpg",
//     name: "Solo Leveling: ReAwakening",
//     rate: "6.9",
//   },
//   {
//     id: 9,
//     img: "/getaway.jpg",
//     name: "Get Away",
//     rate: "6.9",
//   },
//   {
//     id: 10,
//     img: "/sonic3.png",
//     name: "Sonic the Hedgehog 3",
//     rate: "6.9",
//   },
// ];

// export const popularMovies = [
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
// ];

// export const topRatedMovies = [
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
//   {
//     id: 1,
//     img: "/dearsanta.jpg",
//     name: "Dear Santa",
//     rate: "6.9",
//   },
// ];

// const HomePage = () => {
//   return (
//     <div>
//       <TopBar />
//       <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
//         {slides.map((banner, i) => (
//           <Header
//             key={banner.id}
//             id={banner.id}
//             image={banner.img}
//             title={banner.title}
//             rate={banner.rate}
//             desc={banner.desc}
//           />
//         ))}
//       </div>
//       <div className="grid grid-cols-4">
//         {[
//           movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               id={movie.id}
//               name={movie.name}
//               img={movie.img}
//               rate={movie.rate}
//             />
//           )),
//         ]}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
