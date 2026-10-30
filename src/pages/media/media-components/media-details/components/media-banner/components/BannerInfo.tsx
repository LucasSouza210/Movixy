import type { Media } from "../../../../../../../types/tmdb";
import MediaPoster from "../../MediaPoster";
import MediaInfo from "../../media-summary/components/media-info/MediaInfo";

export default function BannerInfo({ media, mediaType, loading }: { media: Media, mediaType: string | undefined, loading: boolean }) {

    return (
        <div className="inset-0 flex lg:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-7.5 2xl:gap-8 absolute lg:relative z-20 lg:z-0 p-6 sm:p-7 md:p-8 lg:p-0">
            <MediaPoster path={media.poster_path} title={media.title} loading={loading} />
            <MediaInfo media={media} mediaType={mediaType} loading={loading} />
        </div>
    )
}