import MediaPosterInfo from "../../../shared/media-poster-info/MediaPosterInfo";
import type { Media } from "../../../../../types/tmdb";
import WeeklyCardBadge from "./WeeklyCardBadge";

export default function WeeklyCardInfo({ movie }: { movie: Media | null }) {
    return (
        <div className="size-full flex items-end absolute z-10 p-8 sm:p-10 md:p-12 lg:p-8 xl:p-9 2xl:p-10">
            <WeeklyCardBadge />
            <MediaPosterInfo media={movie} />
        </div>
    )
}