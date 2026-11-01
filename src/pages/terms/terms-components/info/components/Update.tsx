import { useTranslate } from "../../../../../translations/Translations"

export default function Update() {

    const { line } = useTranslate()

    return (
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base leading-6 sm:leading-6.75 md:leading-7.5 lg:leading-normal text-default">
            {
                line('termsLastUpdated')
            }
        </p>
    )
}