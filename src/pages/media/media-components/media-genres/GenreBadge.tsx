import type { Genre } from "../../../../types/tmdb";

export default function GenreBadge({ genre }: { genre: Genre | undefined }) {
    return (
        <span className="font-medium text-[10px] sm:text-[11px] md:text-xs lg:text-[10px] tracking-wide lg:tracking-wider leading-none py-3 sm:py-3.25 md:py-3.5 lg:py-0 px-4 sm:px-4.25 md:px-4.5 lg:px-0 rounded-full lg:rounded-none border lg:border-none lg:bg-transparent bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-300">
            {genre?.name}
        </span>
    )
}