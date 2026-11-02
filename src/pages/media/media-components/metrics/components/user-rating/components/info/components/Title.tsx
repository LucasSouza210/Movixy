import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider text-title">
            {
                line('userRatingTitle')
            }
        </p>
    )
}