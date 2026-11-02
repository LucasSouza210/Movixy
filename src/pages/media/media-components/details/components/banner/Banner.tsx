import type { Media } from "../../../../../../types/tmdb";
import Skeleton from "../../../../../../components/ui/Skeleton";
import Backdrop from "./components/Backdrop";
import Info from "./components/Info";

export default function Banner({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (

        loading || !media ? <Skeleton className="w-full aspect-video flex lg:hidden rounded-3xl sm:rounded-[28px] md:rounded-4xl" />

            :
            <div className="w-full aspect-video flex lg:hidden relative overflow-hidden rounded-3xl sm:rounded-[28px] md:rounded-4xl border bg-default border-default">
                <Backdrop path={media.backdrop_path} title={mediaType == 'movie' ? media.title : media.name} />
                <Info media={media} mediaType={mediaType} loading={loading} />
                {
                    media.backdrop_path &&
                    <span className="inset-0 absolute z-10 lg:hidden bg-black/65" />
                }
            </div>

    )
}