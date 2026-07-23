import MediaPosterInfo from "../../../../../components/ui/shared/media-poster-info/MediaPosterInfo";
import type { Media } from "../../../../../types/tmdb";
import WeeklyMovieBadge from "./WeeklyMovieBadge";

export default function MovieInfo({ movie }: { movie: Media | null }) {
    return (
        <div className="size-full flex items-end absolute z-10 p-8 sm:p-10 md:p-12 lg:p-8 xl:p-9 2xl:p-10">
            <WeeklyMovieBadge />
            <MediaPosterInfo media={movie} />
        </div>
    )
}