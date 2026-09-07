import { useTranslate } from "../../../../../../../../../../../translations/Translations"

export default function RatingTitle() {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide leading-none text-zinc-800 dark:text-zinc-200 lg:text-zinc-100">
            {line('userRatingTitle')}
        </p>
    )
}