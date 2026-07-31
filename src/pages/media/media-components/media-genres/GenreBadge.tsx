import type { Genre } from "../../../../types/tmdb";

export default function GenreBadge({ genre }: { genre: Genre | undefined }) {
    return (
        <span className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs tracking-wider border border-default rounded-full px-4 md:px-5 lg:px-2.5 xl:px-3.25 2xl:px-4 py-2.5 sm:py-3 md:py-3 lg:py-1.5 xl:py-2 2xl:py-2.5 bg-white dark:bg-black/20 text-orange-600 dark:text-zinc-200">
            {genre?.name}
        </span>
    )
}