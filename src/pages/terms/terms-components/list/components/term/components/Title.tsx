import { useTranslate } from "../../../../../../../translations/Translations"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="font-medium text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg text-title">
            {
                line(title)
            }
        </p>
    )
}