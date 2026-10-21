import { useTranslate } from "../../../../translations/Translations"

export default function Subtitle({ text }: { text: string }) {

    const { line } = useTranslate()

    return (
        <p className="max-w-full min-w-0 text-wrap text-sm sm:text-[15px] md:text-[17px] lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-6.5 sm:leading-7.25 md:leading-8 lg:leading-5.75 xl:leading-6.5 2xl:leading-7.25 text-default">
            {line(text)}
        </p>
    )
}