import type { Director } from "../../types/tmdb";
import DirectorRow from "./DirectorRow";

export default function DirectorContainer({ title, list }: { title: string, list: Director[] }) {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-zinc-800 dark:text-zinc-200">{title}</p>
            <DirectorRow list={list} />
        </div>
    )
}