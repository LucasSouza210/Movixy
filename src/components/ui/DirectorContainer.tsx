import type { Director } from "../../types/tmdb";

export default function DirectorContainer({ title, list }: { title: string, list: Director[] }) {
    return (
        <div className="w-full flex">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">{title}</p>

        </div>
    )
}