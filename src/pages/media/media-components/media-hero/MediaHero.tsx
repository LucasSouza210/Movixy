import type { Media } from "../../../../types/tmdb";
import HeroBackdrop from "./HeroBackdrop";
import HeroInfo from "./HeroInfo";
import MediaHeroSkeleton from "./MediaHeroSkeleton";

export default function MediaHero({ media, mediaType, loading }: { media: Media, mediaType: string | undefined, loading: boolean }) {

    if (!media) return

    return (
        <div className="w-full flex">
            {
                loading ?
                    <MediaHeroSkeleton />
                    :
                    <div className={`w-full aspect-video lg:aspect-auto relative overflow-hidden rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none ${!media.backdrop_path && 'lg:border-none dark:border dark:border-zinc-800'}`}>
                        <div className="lg:hidden">
                            <HeroBackdrop path={media.backdrop_path} title={mediaType == 'movie' ? media.title : media.name} />
                        </div>
                        <span className="inset-0 absolute z-10 lg:hidden bg-black/65"></span>
                        <HeroInfo media={media} mediaType={mediaType} />
                    </div>

            }
        </div>
    )
}