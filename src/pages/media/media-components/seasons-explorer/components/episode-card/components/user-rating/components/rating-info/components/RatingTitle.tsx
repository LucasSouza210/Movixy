import { useTranslate } from "../../../../../../../../../../../translations/Translations"

export default function RatingTitle() {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide leading-none text-title lg:text-white">
            {line('userRatingTitle')}
        </p>
    )
}