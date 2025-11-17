"use client"
import React from "react";
import { Button } from ("@/components/ui/button");

const calculatWinner = (square) => {
  const lines = [
    [0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 4, 8)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][
      (2, 4, 6)
    ],
  ];
  for (const [a, b, c] of lines) {
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return { winner: square[a], line: [a, b, c] };
    }
  }
  return null;
};

const Square = ({value, onClick, Highlight})=>(
    <Button onClic={() => {

    }}></Button>
)
const Board = ({squares, onClic, winningLine}) => (
    <div className="grid gap-2"></div>
)

export const TicTac = () => {
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
       <div className="p-6 rounded-md shadow-sm bg-white border">
        <div className="grid grid-cols-3 border border-black">
            <div className=""></div>
        </div>
       </div>
    </div>
}