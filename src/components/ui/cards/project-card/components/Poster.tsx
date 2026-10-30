import { useImageAlt } from "../../../../../hooks/media/useImageAlt";
import { useImageFallback } from "../../../../../hooks/media/useImageFallback";
import { LuImageOff } from "react-icons/lu";

export default function Poster({ path, title }: { path: string | undefined, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    const { src, onError } = useImageFallback(path ? `https://image.tmdb.org/t/p/w185${path}` : null)

    return (
        <div className="h-full aspect-2/3 flex items-center justify-center rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl overflow-hidden border bg-default border-default">
            {
                src ?
                    <img src={src} loading="lazy" decoding="async" onError={onError} className="size-full object-cover" alt={getImageAlt(title, 'poster')} />
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}