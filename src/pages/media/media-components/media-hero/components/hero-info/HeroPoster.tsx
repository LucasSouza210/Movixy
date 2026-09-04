import { useImageAlt } from "../../../../../../hooks/useImageAlt";
import { LuImageOff } from "react-icons/lu";

export default function HeroPoster({ path, title }: { path: string, title: string | undefined }) {

    const { getImageAlt } = useImageAlt()

    return (
        <div className="aspect-2/3 lg:w-3/10 h-full lg:h-auto flex items-center justify-center rounded-[14px] sm:rounded-[17px] md:rounded-[20px] lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl overflow-hidden shrink-0 border lg:border-default bg-white dark:bg-zinc-950/50 border-zinc-700/50">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'poster')} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-300" />
            }
        </div>
    )
}