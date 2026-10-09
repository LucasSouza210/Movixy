import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function SearchCardPoster({ path, title, isMedia }: { path: string | null, title: string | undefined, isMedia: boolean | undefined }) {

    const { getImageAlt } = useImageAlt()

    const src = isMedia ? `https://image.tmdb.org/t/p/original${path}` : `https://image.tmdb.org/t/p/w500${path}`

    return (
        <div className="w-3/10 aspect-2/3 flex items-center justify-center border border-default rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] overflow-hidden shrink-0 bg-elevated">
            {
                !path ?
                    <img src={src} alt={getImageAlt(title, (isMedia ? 'poster' : 'photo'))} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-default" />
            }
        </div>
    )
}