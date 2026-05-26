import type { Genre } from "../../../../types/tmdb";

export default function GenreBadge({ genre }: { genre: Genre | undefined }) {
    return (
        <span className="font-medium text-[10px] sm:text-[11px] md:text-xs tracking-wide leading-none py-3 sm:py-3.25 md:py-3.5 px-4 sm:px-4.25 md:px-4.5 rounded-full border bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-200">
            {genre?.name}
        </span>
    )
}