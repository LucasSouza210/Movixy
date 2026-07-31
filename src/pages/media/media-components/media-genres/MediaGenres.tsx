import type { Genre } from "../../../../types/tmdb";
import GenreBadge from "./GenreBadge";
import MediaGenresSkeleton from "./MediaGenresSkeleton";

export default function MediaGenres({ genres, loading }: { genres: Genre[] | undefined, loading: boolean }) {
    return (
        loading ? <MediaGenresSkeleton />
            :
            <div className="flex items-center flex-wrap gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                {
                    genres?.slice(0, 3).map((i, index) => (
                        <GenreBadge genre={i} key={index} />
                    ))
                }
            </div>
    )
}