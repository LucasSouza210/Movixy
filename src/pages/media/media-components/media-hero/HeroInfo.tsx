import type { Media } from "../../../../types/tmdb";
import MediaInfo from "./MediaInfo";

export default function HeroInfo({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    return (
        <div className="inset-0 flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 absolute lg:relative z-20 lg:z-0 p-6 sm:p-7 md:p-8 lg:p-0">
            <img src={`https://image.tmdb.org/t/p/original${media?.poster_path}`} alt="" className="h-full lg:h-70 max-h-34 sm:max-h-40 md:max-h-48 lg:max-h-none w-auto object-cover rounded-2xl sm:rounded-[20px] md:rounded-3xl" />
            <MediaInfo media={media} mediaType={mediaType} />
        </div>
    )
}