import { useTranslate } from "../../../../../translations/Translations"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-default">
            {line(title)}
        </p>
    )
}