import type { Media } from "../../../../../../types/tmdb";
import Badge from "./components/Badge";
import MediaPosterInfo from "../../../../shared/media-poster-info/MediaPosterInfo";

export default function Info({ media }: { media: Media | null }) {

    const type = media?.media_type

    return (
        <div className="size-full flex items-end absolute z-10 p-8 sm:p-10 md:p-12 lg:p-8 xl:p-9 2xl:p-10">
            <Badge type={type} />
            <MediaPosterInfo media={media} />
        </div>
    )
}