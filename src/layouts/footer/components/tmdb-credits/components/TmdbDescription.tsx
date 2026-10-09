import { useTranslate } from "../../../../../translations/Translations"

export default function TmdbDescription() {

    const { line } = useTranslate()

    return (
        <p className="lg:max-w-7/8 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-sm font-medium tracking-wider leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-5.5 xl:leading-6 2xl:leading-6.5 text-default">
            {line('tmdbDescription')}
        </p>
    )
}   