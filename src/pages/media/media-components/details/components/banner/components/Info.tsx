import type { Media } from "../../../../../../../types/tmdb";
import Poster from "../../Poster";
import MediaInfo from "../../summary/components/info/Info";

export default function Info({ media, mediaType, loading }: { media: Media, mediaType: string | undefined, loading: boolean }) {

    return (
        <div className="inset-0 flex lg:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-7.5 2xl:gap-8 absolute lg:relative z-20 lg:z-0 p-6 sm:p-7 md:p-8 lg:p-0">
            <Poster path={media.poster_path} title={media.title} loading={loading} />
            <MediaInfo media={media} mediaType={mediaType} loading={loading} />
        </div>
    )
}