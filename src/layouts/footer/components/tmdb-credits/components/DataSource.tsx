import { useTranslate } from "../../../../../translations/Translations"

export default function DataSource() {

    const { line } = useTranslate()

    return (
        <div className="flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-3.5 xl:gap-4 2xl:gap-4.5">
            <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">{line('providedBy')}</p>
            <img className="w-3/4 lg:w-3/7 2xl:w-3/9 object-cover" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="TMDB" />
        </div>
    )
}