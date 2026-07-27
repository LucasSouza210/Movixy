import { useTranslate } from "../../../../../translations/Translations"

export default function DataSource() {

    const { line } = useTranslate()

    return (
        <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">{line('providedBy')}</p>
            <img className="w-3/4 object-cover" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="TMDB" />
        </div>
    )
}