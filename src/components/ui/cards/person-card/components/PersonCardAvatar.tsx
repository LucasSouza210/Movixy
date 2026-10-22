import { useImageAlt } from "../../../../../hooks/useImageAlt"
import { useImageFallback } from "../../../../../hooks/useImageFallback"
import { FaUser } from "react-icons/fa"

export default function PersonCardAvatar({ path, name }: { path: string | null, name: string | null }) {

    const { getImageAlt } = useImageAlt()
    const { src, onError } = useImageFallback(path ? `https://image.tmdb.org/t/p/w500${path}` : null)

    return (
        <div className="w-full aspect-square flex items-center justify-center border rounded-full overflow-hidden relative bg-default border-default">
            {
                src ?
                    <img src={src} alt={getImageAlt(name, 'photo')} loading="lazy" decoding="async" draggable={false} onError={onError} className="size-full object-cover rounded-full" />
                    :
                    <FaUser className="size-2/5 fill-zinc-400" />
            }
            {
                src &&
                <span className="size-full absolute z-10 group-hover:bg-black/15" />
            }
        </div>
    )
}