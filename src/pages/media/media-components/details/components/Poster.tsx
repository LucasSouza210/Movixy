import { useImageAlt } from "../../../../../hooks/media/useImageAlt";
import { LuImageOff } from "react-icons/lu";
import Skeleton from "../../../../../components/ui/Skeleton";

export default function Poster({ path, title, desktop, loading }: { path: string | undefined, title: string | undefined, desktop?: boolean, loading: boolean }) {

    const { getImageAlt } = useImageAlt()

    return (
        loading ? <Skeleton className="aspect-2/3 lg:w-3/10 h-full lg:h-auto rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl shrink-0" />
            :
            <div className={`aspect-2/3 lg:w-3/10 h-full lg:h-fit items-center justify-center rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl overflow-hidden shrink-0 border lg:bg-default lg:border-default bg-zinc-900/50 border-zinc-700/50 ${desktop ? 'hidden lg:flex' : 'flex'}`}>
                {
                    path ?
                        <img src={`https://image.tmdb.org/t/p/original${path}`} alt={getImageAlt(title, 'poster')} className="size-full object-cover" />
                        :
                        <LuImageOff className="size-7 sm:size-8 md:size-9 lg:size-10 xl:size-11 2xl:size-12 lg:text-default text-zinc-300" />
                }
            </div>
    )
}