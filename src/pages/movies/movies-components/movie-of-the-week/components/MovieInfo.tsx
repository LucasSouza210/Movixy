import MediaPosterInfo from "../../../../../components/ui/shared/media-poster-info/MediaPosterInfo";
import type { Media } from "../../../../../types/tmdb";
import WeeklyMovieBadge from "./WeeklyMovieBadge";

export default function MovieInfo({ movie }: { movie: Media | null }) {
    return (
        <div className="size-full flex items-end absolute z-10 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-10">
            <MediaPosterInfo media={movie}/>
            <WeeklyMovieBadge />
        </div>
    )
}