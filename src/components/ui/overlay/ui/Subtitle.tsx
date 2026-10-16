import { useTranslate } from "../../../../translations/Translations"

export default function Subtitle({ text }: { text: string }) {

    const { line } = useTranslate()

    return (
        <p className="max-w-full min-w-0 text-wrap text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7.25 md:leading-8 lg:leading-5.75 xl:leading-6.5 2xl:leading-7.25 text-default">
            {line(text)}
        </p>
    )
}