import { useTranslate } from "../../../../translations/Translations"

export default function SearchCardTitle({ title, year }: { title: string | undefined, year: string | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="min-w-0 flex-1 h-fit flex items-center gap-1 text-xs font-medium leading-none">
            <span className="min-w-0 truncate text-black dark:text-white">
                {title ?? line("unavailableTitle")}
            </span>
            {
                year &&
                <span className="shrink-0 text-[10px] text-zinc-600 dark:text-zinc-400">
                    ({year})
                </span>
            }
        </p>
    )
}