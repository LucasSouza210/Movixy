import type { Genre } from "../../../../types/tmdb";
import GenreBadge from "./GenreBadge";

export default function MediaGenres({ genres }: { genres: Genre[] | undefined }) {
    return (
        <div className="flex items-center flex-wrap">
            {
                genres?.map((i, index) => (
                    <div className="flex items-center after:content-['•'] after:mx-2 sm:after:mx-2.5 md:after:mx-3 lg:after:mx-1.5 xl:after:mx-2 2xl:after:mx-2.5 last:after:hidden after:text-xs sm:after:text-sm md:after:text-base lg:after:text-[10px] xl:after:text-xs 2xl:after:text-sm after:text-zinc-500 dark:after:text-zinc-300">
                        <GenreBadge genre={i} key={index} />
                    </div>
                ))
            }
        </div>
    )
}