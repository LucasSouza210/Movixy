import { useTranslate } from "../../../../../../../../translations/Translations";
import { LuPencil } from "react-icons/lu";
import { LuArrowUpRight } from "react-icons/lu";

export default function TitleLineActions() {

    const { line } = useTranslate()

    return (
        <div className="flex items-center gap-2">
            <button className="h-8 flex items-center gap-1 px-3 border border-default rounded-full text-xs font-medium tracking-wider bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-300">
                {line('viewAll')}
                <LuArrowUpRight />
            </button>
            <button className="size-8 flex items-center justify-center border border-default rounded-full bg-zinc-50 dark:bg-zinc-900/50">
                <LuPencil className="size-2/5 text-zinc-500 dark:text-zinc-300" />
            </button>
        </div>
    )
}