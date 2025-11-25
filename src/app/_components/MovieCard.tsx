import {Star} from "lucide-react"
import Link from "next/link";

type MovieCardProps = {
  id: number;
  backdrop_path: string;
  title: string | undefined;
  vote_avareg: string;
  className?: string;
};

export const MovieCard = ({
  id,
  backdrop_path,
  title,
  vote_avareg,
}:MovieCardProps) => {
  return(
    <Link rel="preload"></Link>
  )
}
