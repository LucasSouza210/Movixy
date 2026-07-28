import type { Media } from "../../../../types/tmdb";
import MediaSaveButton from "./components/MediaSaveButton";
import MediaTrailerLink from "./components/MediaTrailerLink";

export default function MediaActions({ media, mediaType }: { media: Media | null, mediaType: string | undefined }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <MediaTrailerLink id={media?.id} type={mediaType} />
                <MediaSaveButton />
            </div>
        </div>
    )
}