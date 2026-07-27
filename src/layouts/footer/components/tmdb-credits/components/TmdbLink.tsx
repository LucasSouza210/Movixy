import { useTranslate } from "../../../../../translations/Translations"
import { LuExternalLink } from "react-icons/lu";

export default function TmdbLink() {

    const { line } = useTranslate()

    return (
        <a className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75 text-sm sm:text-base md:text-lg lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-none transition-all duration-300 ease-in-out cursor-pointer hover:underline underline-offset-12 sm:underline-offset-14 md:underline-offset-16 lg:underline-offset-8 xl:underline-offset-10 2xl:underline-offset-12  text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400" href="https://www.themoviedb.org">
            {line('learnMoreTmdb')}
            <LuExternalLink />
        </a>
    )
}