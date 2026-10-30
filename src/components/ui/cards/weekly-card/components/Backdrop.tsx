import { useEffect, useState } from "react"
import { useImageAlt } from "../../../../../hooks/media/useImageAlt"
import { useImageFallback } from "../../../../../hooks/media/useImageFallback"
import { LuImageOff } from "react-icons/lu"

export default function Backdrop({ poster, backdrop, title }: { poster: string | undefined, backdrop: string | undefined, title: string | undefined }) {
    const { getImageAlt } = useImageAlt()

    const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 1024px)").matches)

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)")
        const update = () => setIsDesktop(media.matches)

        media.addEventListener("change", update)
        return () => media.removeEventListener("change", update)
    }, [])

    const image = isDesktop && backdrop ? backdrop : poster || backdrop
    const imageType = isDesktop && backdrop ? "backdrop" : "poster"

    const { src, onError } = useImageFallback(image ? `https://image.tmdb.org/t/p/original${image}` : null)

    return (
        <div className="size-full flex items-center justify-center relative bg-white dark:bg-zinc-900/40">
            {
                src ?
                    <>
                        <img src={src} alt={getImageAlt(title, imageType)} loading="lazy" decoding="async" draggable={false} onError={onError} className="size-full object-cover" />
                        <span className="size-full absolute bg-black/55" />
                    </>
                    :
                    <LuImageOff className="size-1/6 text-default" />
            }
        </div>
    )
}
