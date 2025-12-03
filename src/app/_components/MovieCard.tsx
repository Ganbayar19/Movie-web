import { Image, Link } from "lucide-react"

export const MovieCard = ({movie}: MovieCardProps) => {
    return(
        <Link
        href={`/movie/${movie.id}`}
        className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-150 hover:shadow-2xl duration-200 block"
        >
            <div className="relative w-full h-[270px]">
                <Image>
                   
                </Image>
            </div>
        </Link>
    )
}