import { useTranslate } from "../../../../../../../../../../../translations/Translations"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="sm:max-w-7/10 md:max-w-9/10 lg:max-w-none xl:max-w-7/10 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider text-center leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-6.5 xl:leading-7.5 2xl:leading-8.5 text-title">
            {line('noResultsTitle')}
        </p>
    )
}