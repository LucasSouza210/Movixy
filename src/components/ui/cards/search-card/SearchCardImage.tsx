import { LuImageOff } from "react-icons/lu";

export default function SearchCardImage({ path, title, isMedia }: { path: string | null, title: string | undefined, isMedia: boolean | undefined }) {

    const src = isMedia ? `https://image.tmdb.org/t/p/original${path}` : `https://image.tmdb.org/t/p/w500${path}`

    return (
        <div className="aspect-2/3 h-full flex items-center justify-center border border-default rounded-[10px] overflow-hidden shrink-0 dark:bg-zinc-950/25">
            {
                path ?
                    <img src={src} alt={title ?? 'unknown'} loading="lazy" decoding="async" draggable={false} className="size-full object-cover" />
                    :
                    <LuImageOff className="size-1/3 text-zinc-400 dark:text-zinc-300" />
            }
        </div>
    )
}