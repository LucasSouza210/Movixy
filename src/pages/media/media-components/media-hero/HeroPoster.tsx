import { LuImageOff } from "react-icons/lu";

export default function HeroPoster({ path, title }: { path: string, title: string | undefined }) {
    return (
        <div className="aspect-2/3 lg:w-3/10 h-full lg:h-auto flex items-center justify-center rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-4xl xl:rounded-[39px] 2xl:rounded-[46px] overflow-hidden shrink-0 border bg-white dark:bg-zinc-950/50 border-zinc-600 dark:border-zinc-800">
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt={title} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-300" />
            }
        </div>
    )
}