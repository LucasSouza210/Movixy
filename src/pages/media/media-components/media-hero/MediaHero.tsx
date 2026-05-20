import type { Media } from "../../../../types/tmdb";
import HeroInfo from "./HeroInfo";

export default function MediaHero({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    if (!media) return

    return (
        <div className="w-full lg:w-1/2 flex">
            <div className="w-full relative overflow-hidden rounded-3xl">
                <img src={`//image.tmdb.org/t/p/original${media?.backdrop_path}`} alt="" className="w-full h-auto min-h-46 shrink-0" />
                <span className="inset-0 absolute z-10 bg-black/65"></span>
                <HeroInfo media={media} mediaType={mediaType} />
            </div>
        </div>
    )
}