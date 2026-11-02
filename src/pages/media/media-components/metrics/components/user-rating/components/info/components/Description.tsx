import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function Description() {

    const { line } = useTranslate()

    return (
        <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-default">
            {
                line('ratingSlider')
            }
        </p>
    )
}