import { useTranslate } from "../../../../../translations/Translations"

export default function TmdbDescription() {

    const { line } = useTranslate()

    return (
        <p className="lg:max-w-7/8 text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-sm font-medium tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-5 xl:leading-5.5 2xl:leading-6 text-zinc-500 dark:text-zinc-300">
            {line('tmdbDescription')}
        </p>
    )
}   