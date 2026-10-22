import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { useImageFallback } from "../../../../../hooks/useImageFallback";
import { LuImageOff } from "react-icons/lu";

export default function Poster({ path, title, isMedia }: { path: string | null, title: string | undefined, isMedia: boolean | undefined }) {

    const { getImageAlt } = useImageAlt()

    const { src, onError } = useImageFallback(path ? `https://image.tmdb.org/t/p/${isMedia ? 'original' : 'w500'}${path}` : null)

    return (
        <div className="w-3/10 aspect-2/3 flex items-center justify-center border border-default rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] overflow-hidden shrink-0 bg-elevated">
            {
                src ?
                    <img src={src} alt={getImageAlt(title, (isMedia ? 'poster' : 'photo'))} loading="lazy" decoding="async" draggable={false} onError={onError} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}