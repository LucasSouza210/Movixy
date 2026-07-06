import type { Genre } from "../../../../types/tmdb";

export default function GenreBadge({ genre }: { genre: Genre | undefined }) {
    return (
        <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-5 sm:leading-6 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-orange-600 dark:text-orange-500">
            {genre?.name}
        </span>
    )
}