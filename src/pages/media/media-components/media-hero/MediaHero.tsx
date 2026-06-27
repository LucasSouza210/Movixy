import type { Media } from "../../../../types/tmdb";
import HeroBackdrop from "./HeroBackdrop";
import HeroInfo from "./HeroInfo";

export default function MediaHero({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    if (!media) return

    return (
        <div className="w-full flex">
            <div className={`w-full lg:h-auto lg:min-h-60 relative overflow-hidden rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none ${!media.backdrop_path && 'dark:border dark:border-zinc-800'}`}>
                <div className="lg:hidden">
                <HeroBackdrop path={media.backdrop_path} title={mediaType == 'movie' ? media.title : media.name} />
                </div>
                <span className="inset-0 absolute z-10 lg:hidden bg-black/65"></span>
                <HeroInfo media={media} mediaType={mediaType} />
            </div>
        </div>
    )
}