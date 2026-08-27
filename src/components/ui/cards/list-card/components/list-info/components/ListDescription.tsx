import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListDescription({ description, fixed }: { description: string | undefined | null, fixed: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-4.5 xl:leading-5.5 2xl:leading-6.5 line-clamp-2 text-zinc-500 dark:text-zinc-300">
            {
                description ? fixed ? line(description) : description : line('notInformed')
            }
        </p>
    )
}