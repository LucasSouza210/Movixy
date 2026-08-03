import { FaTrophy } from "react-icons/fa"
import { useTranslate } from "../../../../../../../translations/Translations"

export default function HighlightBadge({ department }: { department: string | undefined }) {

    const { line } = useTranslate()

    const isActor = department === 'Acting'

    return (
        <span className="flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 py-3 sm:py-3.5 md:py-4 lg:py-3 xl:py-3.5 2xl:py-4 px-4 sm:px-5 md:px-6 lg:px-4 xl:px-5 2xl:px-6 text-[10px] sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-none rounded-full border-2 absolute right-6 sm:right-7 md:right-8 lg:right-6 xl:right-7 2xl:right-8 bottom-6 sm:top-7 md:top-8 lg:top-6 xl:top-7 2xl:top-8 backdrop-blur-xs bg-zinc-800/40 border-zinc-500/40 text-zinc-300">
            {line(isActor ? 'actorOfTheWeek' : 'directorOfTheWeek')}
            <FaTrophy />
        </span>
    )
}