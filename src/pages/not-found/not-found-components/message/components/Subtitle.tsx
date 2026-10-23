import { useTranslate } from "../../../../../translations/Translations"

export default function Subtitle({ subtitle }: { subtitle?: string }) {

    const { line } = useTranslate()

    return (
        <p className="max-w-76 sm:max-w-86 md:max-w-96 lg:max-w-72 xl:max-w-79 2xl:max-w-86 text-center text-base sm:text-lg md:text-xl lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-7 sm:leading-8 md:leading-9 lg:leading-6 xl:leading-6.5 2xl:leading-7 text-default">
            {line(subtitle ?? 'notFoundSubtitle')}
        </p>
    )
}