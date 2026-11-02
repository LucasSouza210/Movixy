import { useImageAlt } from "../../../../../../../hooks/media/useImageAlt";
import { useImageFallback } from "../../../../../../../hooks/media/useImageFallback";
import { LuImageOff } from "react-icons/lu";

export default function Poster({ poster, backdrop, title }: { poster: string | null, backdrop: string | null, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    const posterImage = useImageFallback(poster ? `https://image.tmdb.org/t/p/original${poster}` : null)
    
    const backdropImage = useImageFallback(backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : null)

    const isLgUp = window.matchMedia("(min-width: 1024px)").matches

    const candidates = isLgUp ? [{ ...backdropImage, type: "backdrop" as const }, { ...posterImage, type: "poster" as const }] : [{ ...posterImage, type: "poster" as const }, { ...backdropImage, type: "backdrop" as const }]

    const current = candidates.find((candidate) => candidate.src)

    return (
        <div className="size-full flex items-center justify-center">
            {
                current?.src ?
                    <img src={current.src} alt={getImageAlt(title, current.type)} loading="lazy" decoding="async" draggable={false} onError={current.onError} className="size-full object-cover" />
                    :
                    <LuImageOff />
            }
        </div>
    )
}