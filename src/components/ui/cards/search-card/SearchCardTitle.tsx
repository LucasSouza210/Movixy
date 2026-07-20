import { useTranslate } from "../../../../translations/Translations"

export default function SearchCardTitle({ title, year }: { title: string | undefined, year: string | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="flex-1 min-w-0 h-fit flex items-center gap-1 sm:gap-1.25 md:gap-1.5 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium leading-4.5 sm:leading-5 md:leading-5.5 lg:leading-4.5 xl:leading-5 2xl:leading-5.5">
            <span className="min-w-0 truncate text-black dark:text-white">
                {title ?? line("unavailableTitle")}
            </span>
            {
                year &&
                <span className="shrink-0 text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm text-zinc-600 dark:text-zinc-400">
                    ({year})
                </span>
            }
        </p>
    )
}   