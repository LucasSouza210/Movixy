import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-lg sm:text-[19px] md:text-xl lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider text-title">
            {
                line(title)
            }
        </p>
    )
}