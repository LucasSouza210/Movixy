import type { IconType } from "react-icons";
import useLang from "../../../../../../../../../hooks/useLang";

export default function GenreChip({ selected, icon, genre, value, toggle }: { selected: boolean, icon: IconType, genre: { pt: string, en: string, es: string }, value: number, toggle: (value: number) => void }) {

    const lang = useLang()

    const Icon = icon

    return (
        <button className={`flex items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75 py-2.5 sm:py-2.75 md:py-3 lg:py-2.5 xl:py-2.75 2xl:py-3 px-3 sm:px-3.25 md:px-3.5 lg:px-3 xl:px-3.25 2xl:px-3.5 transition-all duration-300 ease-in-out cursor-pointer text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-sm font-medium tracking-wide leading-none border rounded-full ${selected ? 'bg-zinc-100 dark:bg-zinc-900 border-zinc-400/50 dark:border-zinc-700/50 text-orange-500' : 'border-action action-elevated text-default hover:text-orange-500'}`} onClick={() => toggle(value)}>
            <Icon className="" />
            {genre[lang]}
        </button>
    )
}