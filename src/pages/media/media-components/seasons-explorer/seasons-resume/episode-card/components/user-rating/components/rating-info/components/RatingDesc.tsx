import { useTranslate } from "../../../../../../../../../../../translations/Translations"

export default function RatingDesc() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-none text-default lg:text-zinc-300">
            {line('userRatingSubtitle')}
        </p>
    )
}