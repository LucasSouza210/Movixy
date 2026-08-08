import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListDescription({ description, translate }: { description: string | undefined | null, translate: boolean | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-5.5 xl:leading-6 2xl:leading-6.5 line-clamp-2 text-zinc-500 dark:text-zinc-300">
            {
                description ? translate ? line(description) : description : line('notInformed')
            }
        </p>
    )
}