import { useTranslate } from "../../../../../translations/Translations"

export default function TmdbDescription() {

    const { line } = useTranslate()

    return (
        <p className="text-sm font-medium tracking-wider leading-5.5 text-zinc-500 dark:text-zinc-300">
            {line('tmdbDescription')}
        </p>
    )
}