import type { Genre } from "../../../../types/tmdb";

export default function GenreBadge({ genre }: { genre: Genre | undefined }) {
    return (
        <span className="font-medium text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider leading-5 sm:leading-6 md:leading-7 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 text-orange-600 dark:text-orange-500">
            {genre?.name}
        </span>
    )
}