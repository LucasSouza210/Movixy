import { useTranslate } from "../../../../../../../translations/Translations"
import { FaTrophy } from "react-icons/fa";

export default function Badge({ type }: { type: string | undefined }) {

    const { line } = useTranslate()

    const title = type ? (type == 'movie' ? 'movieOfTheWeek' : 'seriesOfTheWeek') : 'movieOfTheWeek'

    return (
        <span className="flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 py-3 sm:py-3.5 md:py-4 lg:py-2.5 xl:py-3 2xl:py-3.5 px-4 sm:px-4.75 md:px-5.5 lg:px-3 xl:px-3.75 2xl:px-4.5 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-none rounded-full border absolute right-6 sm:right-7 md:right-8 lg:right-6 xl:right-7 2xl:right-8 top-6 sm:top-7 md:top-8 lg:top-6 xl:top-7 2xl:top-8 backdrop-blur-xs bg-zinc-800/40 border-zinc-500/40 text-zinc-300">
            {line(title)}
            <FaTrophy />
        </span>
    )
}