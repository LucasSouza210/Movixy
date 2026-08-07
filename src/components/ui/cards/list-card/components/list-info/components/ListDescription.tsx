import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListDescription({ description, translate }: { description: string | undefined | null, translate: boolean | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs font-medium tracking-wider leading-5 line-clamp-2 text-zinc-500 dark:text-zinc-300">
            {
                description ? translate ? line(description) : description : line('notInformed')
            }
        </p>
    )
}