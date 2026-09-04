import type { Media } from "../../../../types/tmdb";
import HeroBackdrop from "./components/HeroBackdrop";
import HeroInfo from "./components/hero-info/HeroInfo";
import MediaHeroSkeleton from "./MediaHeroSkeleton";

export default function MediaHero({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {
    return (

        loading || !media ? <MediaHeroSkeleton />
            :
            <div className="w-full aspect-video lg:aspect-auto flex relative overflow-hidden rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none border lg:border-none border-default">
                <div className="size-full flex lg:hidden">
                    <HeroBackdrop path={media.backdrop_path} title={mediaType == 'movie' ? media.title : media.name} />
                </div>
                <span className="inset-0 absolute z-10 lg:hidden bg-black/65"></span>
                <HeroInfo media={media} mediaType={mediaType} loading={loading} />
            </div>

    )
}