import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import type { IconType } from "react-icons";

export default function GenreChip({ selected, icon, genre, value, toggle }: { selected: boolean, icon: IconType, genre: { pt: string, en: string, es: string }, value: number, toggle: (value: number) => void }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const Icon = icon

    return (
        <button className={`${selected ? 'dark:bg-zinc-950/50 border-zinc-700 dark:text-orange-400' : 'border-default bg-zinc-50 dark:bg-zinc-950/10 dark:text-zinc-300'} flex items-center gap-1.5 py-2.5 px-3 text-[10px] font-medium tracking-wide leading-none border rounded-full`} onClick={() => toggle(value)}>
            <Icon className="size-2.5" />
            {genre[lang]}
        </button>
    )
}