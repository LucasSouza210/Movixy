import type { Genre } from "../../../../types/tmdb";
import GenreBadge from "./GenreBadge";

export default function MediaGenres({ genres }: { genres: Genre[] | undefined }) {
    return (
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 md:gap-5">
            {
                genres?.map((i, index) => (
                    <GenreBadge genre={i} key={index} />
                ))
            }
        </div>
    )
}