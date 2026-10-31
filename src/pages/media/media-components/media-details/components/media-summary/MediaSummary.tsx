import type { Media } from "../../../../../../types/tmdb";
import MediaPoster from "../MediaPoster";
import MediaInfo from "./components/media-info/MediaInfo";
import MediaOverview from "./components/media-overview/MediaOverview";
import MediaGenres from "./components/media-genres/MediaGenres";
import MediaActions from "../media-actions/MediaActions";

export default function MediaSummary({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (
        <div className="w-full flex lg:gap-7 xl:gap-7.5 2xl:gap-8">
            <MediaPoster path={media?.poster_path} title={media?.title} desktop loading={loading} />
            <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                <MediaInfo media={media} mediaType={mediaType} desktop={true} loading={loading} />
                <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-3">
                    <MediaOverview overview={media?.overview} loading={loading} />
                    <MediaGenres genres={media?.genres} loading={loading} />
                </div>
                {
                    !loading &&
                    <MediaActions media={media} mediaType={mediaType} />
                }
            </div>
        </div>
    )
}