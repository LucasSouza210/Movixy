import type { Media } from "../../../../types/tmdb";
import HeroPoster from "./HeroPoster";
import MediaInfo from "./MediaInfo";

export default function HeroInfo({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    return (
        <div className="inset-0 flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-7.5 2xl:gap-8 absolute lg:relative z-20 lg:z-0 p-6 sm:p-7 md:p-8 lg:p-0">
            <HeroPoster path={media.poster_path} title={media.title}/>
            <MediaInfo media={media} mediaType={mediaType} />
        </div>
    )
}