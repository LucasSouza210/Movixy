import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Description({ description }: { description: string }) {

    const { line } = useTranslate()

    return (
        <p className="max-w-9/10 text-center text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-default">
            {
                line(description)
            }
        </p>
    )
}