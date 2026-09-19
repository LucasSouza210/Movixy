import type { Media } from "../../../../../../types/tmdb";
import MediaPoster from "../media-poster/MediaPoster";
import MediaInfo from "../media-info/MediaInfo";
import MediaGenres from "../../../media-genres/MediaGenres";
import MediaOverview from "../../../media-overview/MediaOverview";
import MediaActions from "../media-actions/MediaActions";

export default function MediaSummary({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (
        <div className="w-full flex lg:gap-7 xl:gap-7.5 2xl:gap-8">
            <MediaPoster path={media?.poster_path} title={media?.title} desktop loading={loading} />
            <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
                <MediaInfo media={media} mediaType={mediaType} desktop={true} loading={loading} />
                <MediaOverview overview={media?.overview} loading={loading} />
                <MediaGenres genres={media?.genres} loading={loading} />
                <MediaActions media={media} mediaType={mediaType} />
            </div>
        </div>
    )
}