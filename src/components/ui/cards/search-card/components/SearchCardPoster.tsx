import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function SearchCardPoster({ path, title, isMedia }: { path: string | null, title: string | undefined, isMedia: boolean | undefined }) {

    const { getImageAlt } = useImageAlt()

    const src = isMedia ? `https://image.tmdb.org/t/p/original${path}` : `https://image.tmdb.org/t/p/w500${path}`

    return (
        <div className="aspect-2/3 h-full flex items-center justify-center border border-default rounded-lg sm:rounded-[10px] md:rounded-xl lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl overflow-hidden shrink-0 dark:bg-zinc-950/25">
            {
                path ?
                    <img src={src} alt={getImageAlt(title, (isMedia ? 'poster' : 'photo'))} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-300" />
            }
        </div>
    )
}