import { useImageAlt } from "../../../../../../hooks/useImageAlt";
import { useImageFallback } from "../../../../../../hooks/useImageFallback";
import { LuImageOff } from "react-icons/lu";

export default function Item({ path, title }: { path: string | null, title: string }) {

    const { getImageAlt } = useImageAlt()

    const { src, onError } = useImageFallback(path ? `https://image.tmdb.org/t/p/original${path}` : null)

    return (
        <div className="w-full aspect-2/3 flex items-center justify-center rounded-lg sm:rounded-[10px] md:rounded-xl lg:rounded-lg xl:rounded-[11px] 2xl:rounded-xl border overflow-hidden border-default">
            {
                src ?
                    <img src={src} alt={getImageAlt(title, 'poster')} onError={onError} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}