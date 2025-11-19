import { propagateServerField } from "next/dist/server/lib/render-server";

type MovieCardProps = {
  id: number;
  img: string;
  name: string;
  rate: string;
};

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className="w-230px px-6 rounded-4xl border">
      <img src={props.img} />
      <div>{props.name}</div>
    </div>
  );
};
