import type { Media } from "../../../../types/tmdb";
import HeroInfo from "./HeroInfo";

export default function MediaHero({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    if (!media) return

    return (
        <div className="w-full flex">
            <div className="w-full lg:h-auto lg:min-h-60 relative overflow-hidden rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none">
                <img src={`//image.tmdb.org/t/p/original${media?.backdrop_path}`} alt="" className="w-full h-auto min-h-46 shrink-0 lg:hidden" />
                <span className="inset-0 absolute z-10 lg:hidden bg-black/65"></span>
                <HeroInfo media={media} mediaType={mediaType} />
            </div>
        </div>
    )
}