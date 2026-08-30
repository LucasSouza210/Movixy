import { useTranslate } from "../../../../../../../../../../translations/Translations"

export default function OptionTitle({ title, fixed }: { title: string, fixed: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm font-medium tracking-wider line-clamp-1 text-black dark:text-white">
            {
                fixed ? line(title) : title
            }
        </p>
    )
}