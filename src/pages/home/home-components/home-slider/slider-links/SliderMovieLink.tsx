import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function SliderMovieLink({ id }: { id: number }) {
    return (
        <Link to={`/media/movie/${id}`} className="size-9 sm:size-10.5 md:size-12 lg:size-7 xl:size-8.5 2xl:size-10 flex items-center justify-center rounded-full border-2 backdrop-blur-[2px] group transition-all duration-300 ease-in-out bg-black/30 hover:bg-black/40 border-zinc-500/70 hover:border-zinc-400/70">
            <FiArrowUpRight className="size-3/5 text-zinc-400 group-hover:text-zinc-200"/>
        </Link>
    )
}