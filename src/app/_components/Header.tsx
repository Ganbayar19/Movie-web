"use client";

import { useState } from "react";

type HeaderProps = {
  id: number;
  img: string;
  title: string;
  rate:string;
  desc: string;
};

export const Header = (props: HeaderProps) => {
return(
    <div>
        <img src={props.img}/>
        <div>{props.title}</div>
    </div>
)
}

// export const BannerSlide = () =>{
// const [index, setIndex] = useState(0);

// const nextSlide = () =>{
//     setIndex((prev)=>(prev + 1 % slides.lenght))
// }

// const prevSlide = () =>{
//     set
// }
// }
