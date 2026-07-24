import { LuImageOff } from "react-icons/lu";

export default function WeeklyCardBackdrop({ poster, backdrop, title }: { poster: string | undefined, backdrop: string | undefined, title: string | undefined }) {

    return (
        <div className="size-full flex items-center justify-center relative bg-white dark:bg-zinc-900/40">
            {
                (poster || backdrop) ?
                    <span className="size-full flex relative">
                        <img src={`https://image.tmdb.org/t/p/original${poster}`} alt={title} loading="lazy" decoding="async" draggable={false} className="size-full object-cover block lg:hidden" />
                        <img src={`https://image.tmdb.org/t/p/original${backdrop}`} alt={title} loading="lazy" decoding="async" draggable={false} className="size-full object-cover hidden lg:block" />
                        <span className="size-full absolute bg-black/55" />
                    </span>
                    :
                    <LuImageOff className="size-1/6 text-zinc-400 dark:text-zinc-600" />
            }
        </div>
    )
}