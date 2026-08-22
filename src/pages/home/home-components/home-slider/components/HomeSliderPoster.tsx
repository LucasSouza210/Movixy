import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function HomeSliderPoster({ poster, backdrop, title }: { poster: string | null, backdrop: string | null, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    const isLgUp = window.matchMedia("(min-width: 1024px)").matches

    const imagePath = isLgUp ? backdrop : poster

    return (
        <div className="size-full flex items-center justify-center">
            {
                (poster || backdrop) ?
                    <img src={`https://image.tmdb.org/t/p/original${imagePath}`} alt={getImageAlt(title, 'poster')} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                    :
                    <LuImageOff />
            }
        </div>
    )
}