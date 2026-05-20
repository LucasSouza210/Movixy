import type { Media } from "../../../../types/tmdb";
import MediaLabel from "./MediaLabel";
import MediaSaveButton from "./MediaSaveButton";
import MediaTrailerButton from "./MediaTrailerButton";

//@ts-ignore
export default function MediaActions({ media, mediaType }: { media: Media, mediaType: string | undefined }) {
    return (
        <div className="flex items-center justify-between">
            {/* <MediaLabel media={media} mediaType={mediaType} /> */}
            <div className="flex items-center gap-4">
                <MediaTrailerButton />
                <MediaSaveButton />
            </div>
        </div>
    )
}