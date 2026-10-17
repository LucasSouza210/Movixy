import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function PageLink({ id, type }: { id: number | undefined, type: string | undefined }) {
    return (
        <Link to={id ? `/media/${type ?? 'movie'}/${id}` : '#'} className={`size-10 sm:size-11 md:size-12 lg:size-8 xl:size-9 2xl:size-10 flex items-center justify-center rounded-full border-2 backdrop-blur-[2px] group transition-all duration-300 ease-in-out bg-black/30 border-zinc-500/70 ${id ? 'cursor-pointer hover:bg-black/40 hover:border-zinc-400/70' : 'cursor-not-allowed'}`}>
            <FiArrowUpRight className={`size-3/5 text-zinc-400 ${id && 'group-hover:text-zinc-200'}`} />
        </Link>
    )
}