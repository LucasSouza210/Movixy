import { useTranslate } from "../../../../../../../translations/Translations"

export default function Description({ description, fixed }: { description: string | undefined | null, fixed: boolean }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-5 sm:leading-6 md:leading-7 lg:leading-4 xl:leading-5 2xl:leading-6 line-clamp-2 text-default">
            {
                description ? (fixed ? line(description) : description) : line(description === undefined ? 'descriptionUnavailable' : 'noDescription')
            }
        </p>
    )
}