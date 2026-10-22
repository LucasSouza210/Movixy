import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { useImageFallback } from "../../../../../hooks/useImageFallback";
import { LuImageOff } from "react-icons/lu";

export default function WeeklyCardBackdrop({ poster, backdrop, title }: { poster: string | undefined, backdrop: string | undefined, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    const posterImage = useImageFallback(poster ? `https://image.tmdb.org/t/p/original${poster}` : null)
    const backdropImage = useImageFallback(backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : null)

    const posterClass = backdropImage.src ? "block lg:hidden" : "block"
    const backdropClass = posterImage.src ? "hidden lg:block" : "block"

    return (
        <div className="size-full flex items-center justify-center relative bg-white dark:bg-zinc-900/40">
            {
                (posterImage.src || backdropImage.src) ?
                    <span className="size-full flex relative">
                        {
                            posterImage.src &&
                            <img src={posterImage.src} alt={getImageAlt(title, 'poster')} loading="lazy" decoding="async" draggable={false} onError={posterImage.onError} className={`size-full object-cover ${posterClass}`} />
                        }
                        {
                            backdropImage.src &&
                            <img src={backdropImage.src} alt={getImageAlt(title, 'backdrop')} loading="lazy" decoding="async" draggable={false} onError={backdropImage.onError} className={`size-full object-cover ${backdropClass}`} />
                        }
                        <span className="size-full absolute bg-black/55" />
                    </span>
                    :
                    <LuImageOff className="size-1/6 text-default" />
            }
        </div>
    )
}