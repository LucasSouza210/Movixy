import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function ProjectPoster({ path, title }: { path: string | undefined, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-3/10 aspect-2/3 flex items-center justify-center rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl overflow-hidden border bg-default border-default">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w185${path}`} loading="lazy" decoding="async" className="size-full object-cover" alt={getImageAlt(title, 'poster')} />
                    :
                    <LuImageOff className="size-1/3 text-zinc-500 dark:text-zinc-400" />
            }
        </div>
    )
}