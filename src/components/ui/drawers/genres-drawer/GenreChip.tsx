import type { IconType } from "react-icons";
import useLang from "../../../../hooks/useLang";

export default function GenreChip({ selected, icon, genre, value, toggle }: { selected: boolean, icon: IconType, genre: { pt: string, en: string, es: string }, value: number, toggle: (value: number) => void }) {

    const lang = useLang()

    const Icon = icon

    return (
        <button className={`flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 py-2.5 sm:py-2.75 md:py-3 lg:py-2.5 xl:py-2.75 2xl:py-3 px-3 sm:px-3.25 md:px-3.5 lg:px-3 xl:px-3.25 2xl:px-3.5 transition-all duration-300 ease-in-out cursor-pointer text-[10px] sm:text-[11px] md:text-xs lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wide leading-none border rounded-full ${selected ? 'bg-white dark:bg-zinc-950/50 border-zinc-400/70 dark:border-zinc-700 text-orange-500' : 'border-default bg-white/50 hover:bg-white dark:bg-zinc-950/10 dark:hover:bg-zinc-950/50 text-zinc-500 hover:text-orange-400 dark:text-zinc-300'}`} onClick={() => toggle(value)}>
            <Icon className="" />
            {genre[lang]}
        </button>
    )
}