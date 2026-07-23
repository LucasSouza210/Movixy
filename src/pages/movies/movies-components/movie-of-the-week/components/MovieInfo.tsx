import MediaPosterInfo from "../../../../../components/ui/shared/media-poster-info/MediaPosterInfo";
import type { Media } from "../../../../../types/tmdb";
import MediaPosterServices from "./media-poster-services/MediaPosterServices";
import WeeklyMovieBadge from "./WeeklyMovieBadge";

export default function MovieInfo({ movie }: { movie: Media | null }) {
    return (
        <div className="size-full flex items-end absolute z-10 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-10">
            <WeeklyMovieBadge />
            <div className="w-full flex flex-col gap-4">
                <MediaPosterInfo media={movie} />
                <MediaPosterServices id={movie?.id} mediaType={movie?.media_type} />
            </div>
        </div>
    )
}