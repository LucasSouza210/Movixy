import { useTranslate } from "../../../../../../../translations/Translations"

export default function ListTitle({ title, fixed }: { title: string | null | undefined, fixed: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider line-clamp-1 text-black dark:text-white">
            {
                title ? fixed ? line(title) : title : line('notInformed')
            }
        </p>
    )
}