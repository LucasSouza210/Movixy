import type { Media } from "../../../../types/tmdb";
import MediaPosterDetails from "./components/media-poster-details/MediaPosterDetails"
import MediaPosterLinks from "./components/media-poster-links/MediaPosterLinks";

export default function MediaPosterInfo({ media, bottom }: { media: Media | null, bottom?: boolean }) {
    return (
        <div className={`flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6 ${bottom && 'mb-11 sm:mb-13 md:mb-15 lg:mb-8 xl:mb-9.5 2xl:mb-11'}`}>
            <MediaPosterDetails title={media?.title ?? media?.name} average={media?.vote_average} release={media?.release_date ?? media?.first_air_date} />
            <MediaPosterLinks id={media?.id} type={media?.media_type} />
        </div>
    )
}