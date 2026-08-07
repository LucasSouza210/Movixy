import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListTitle({ title, translate }: { title: string | null | undefined, translate: boolean | undefined | null }) {

    const { line } = useTranslate()

    return (
        <p className="text-base font-medium tracking-wider line-clamp-1 text-black dark:text-white">
            {
                title ? translate ? line(title) : title : line('notInformed')
            }
        </p>
    )
}