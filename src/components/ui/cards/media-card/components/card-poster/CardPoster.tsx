import type { Media, PersonCredit } from "../../../../../../types/tmdb";
import { LuImageOff } from "react-icons/lu";
import { useImageFallback } from "../../../../../../hooks/media/useImageFallback";
import Poster from "./components/Poster";
import PosterActions from "./components/poster-actions/PosterActions";

export default function CardPoster({ media, exclude }: { media: Media | PersonCredit, exclude?: boolean }) {

    const path = media.poster_path

    const { src, onError } = useImageFallback(path ? `https://image.tmdb.org/t/p/original${path}` : null)

    return (
        <div className="w-full aspect-2/3 shrink-0 flex items-center justify-center rounded-[20px] sm:rounded-[25px] md:rounded-[28px] lg:rounded-2xl xl:rounded-[19px] 2xl:rounded-[22px] overflow-hidden relative border border-default bg-white dark:bg-zinc-900/50">
            {
                src ?
                    <Poster src={src} title={media.title ?? media.name} onError={onError} />
                    :
                    <LuImageOff className="size-1/4 text-default" />
            }
            <PosterActions media={media} exclude={exclude} />
            <span className={src ? 'size-full absolute z-10 group-hover:bg-black/15' : ''} />
        </div>
    )
}