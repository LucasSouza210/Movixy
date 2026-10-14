import type { Media } from "../../../../../../types/tmdb";
import MediaBannerSkeleton from "./MediaBannerSkeleton";
import BannerBackdrop from "./components/BannerBackdrop";
import BannerInfo from "./components/banner-info/BannerInfo";

export default function MediaBanner({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (

        loading || !media ? <MediaBannerSkeleton />
            :
            <div className="w-full aspect-video flex lg:hidden relative overflow-hidden rounded-3xl sm:rounded-[28px] md:rounded-4xl border bg-default border-default">
                <BannerBackdrop path={media.backdrop_path} title={mediaType == 'movie' ? media.title : media.name} />
                <BannerInfo media={media} mediaType={mediaType} loading={loading} />
                {
                    media.backdrop_path &&
                    <span className="inset-0 absolute z-10 lg:hidden bg-black/65" />
                }
            </div>

    )
}