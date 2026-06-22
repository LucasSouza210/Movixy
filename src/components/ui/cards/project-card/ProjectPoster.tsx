import { LuImageOff } from "react-icons/lu";

export default function ProjectPoster({ path, title }: { path: string | undefined, title: string | undefined }) {
    return (
        <>
            {
                path ?
                    <img src={`https://image.tmdb.org/t/p/w185${path}`} loading="lazy" decoding="async" className="h-full aspect-2/3 object-cover rounded-xl sm:rounded-[14px] md:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px]" alt={title} />
                    :
                    <div className="h-full aspect-2/3 flex items-center justify-center rounded-xl sm:rounded-[14px] md:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] border bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800/80">
                        <LuImageOff className="size-5 text-zinc-500 dark:text-zinc-400" />
                    </div>
            }
        </>
    )
}