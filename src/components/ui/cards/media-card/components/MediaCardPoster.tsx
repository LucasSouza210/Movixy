import { useImageAlt } from "../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function MediaCardPoster({ path, title }: { path: string | undefined, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="w-full aspect-2/3 flex items-center justify-center rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl overflow-hidden border border-default bg-white dark:bg-zinc-900/50">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'poster')} className="size-full object-cover" loading="lazy" decoding="async" draggable={false} />
                    :
                    <LuImageOff className="size-1/4 text-zinc-400 dark:text-zinc-500" />
            }
        </div>
    )
}