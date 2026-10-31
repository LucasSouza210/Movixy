import type { Media } from "../../../../types/tmdb";
import MediaBanner from "./components/media-banner/MediaBanner";
import MediaSummary from "./components/media-summary/MediaSummary";
import MediaActions from "./components/media-actions/MediaActions";

export default function MediaDetails({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-0">
            <MediaBanner media={media} mediaType={mediaType} loading={loading} />
            <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
                <MediaSummary media={media} mediaType={mediaType} loading={loading} />
                {
                    !loading &&
                    <MediaActions media={media} mediaType={mediaType} mobile />
                }
            </div>
        </div>
    )
}