import type { Genre } from "../../../../types/tmdb";
import GenreBadge from "./GenreBadge";

export default function MediaGenres({ genres }: { genres: Genre[] | undefined }) {
    return (
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-0">
            {
                genres?.map((i, index) => (
                    <div className="flex items-center lg:after:content-['•'] lg:after:mx-1 lg:last:after:hidden lg:after:text-[10px] lg:after:text-zinc-500 lg:dark:after:text-zinc-300">
                        <GenreBadge genre={i} key={index} />
                    </div>
                ))
            }
        </div>
    )
}