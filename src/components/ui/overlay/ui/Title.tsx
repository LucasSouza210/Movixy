import { useTranslate } from "../../../../translations/Translations"

export default function Title({ text }: { text: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-lg sm:text-[21px] md:text-2xl lg:text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider text-title">
            {line(text)}
        </p>
    )
}