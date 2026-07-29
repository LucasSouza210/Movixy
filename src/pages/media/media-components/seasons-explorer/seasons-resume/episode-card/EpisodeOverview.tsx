import { useContext, useState } from "react"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"
import { useTranslate } from "../../../../../../translations/Translations"
import { useFormattedDate } from "../../../../../../hooks/useFormattedDate"
import formatRate from "../../../../../../utils/tmdb/formatRate"
import { TbPointFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import useLang from "../../../../../../hooks/useLang"

export default function EpisodeOverview() {

    const lang = useLang()

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedSeason, selectedEp } = explorer!

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const episode = episodes.find(
        (e) => e.episode_number === selectedEp
    )

    if (!episode) return null

    const limit = 76, isLong = episode.overview?.length! > limit, text = expanded ? episode.overview : episode.overview?.slice(0, limit);

    return (
        <div className="w-full h-full lg:h-auto flex flex-col justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 px-6 sm:px-7 md:px-8 lg:p-0">
            <div className="w-full max-w-max flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
                <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide sm:tracking-wider leading-none text-zinc-500 dark:text-zinc-400 lg:text-zinc-300">
                    {`${lang == 'en' ? 'S' : 'T'}${selectedSeason}`}.{`E${episode.episode_number}`}
                    <TbPointFilled className="size-1.5 sm:size-2 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5" />
                    {`${useFormattedDate(episode.air_date)}`}
                </p>
                <p className="flex items-center gap-0.75 sm:gap-1 md:gap-1.25 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide sm:tracking-wider leading-none text-zinc-700 dark:text-zinc-300 lg:text-zinc-100">
                    <FaStar className="size-2 sm:gap-2.25 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-400" />
                    {formatRate(episode.vote_average)}
                </p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1 xl:gap-1.5 2xl:gap-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider sm:tracking-[0.075em] md:tracking-widest leading-5.5 text-black dark:text-white lg:text-white">{episode.name}</p>
                <p className="lg:max-w-70 xl:max-w-81 2xl:max-w-92 text-sm sm:text-base md:text-lg lg:text-xs 2xl:text-base font-medium tracking-wider leading-5 sm:leading-5.25 md:leading-6.5 lg:leading-4.5 2xl:leading-6 text-zinc-600 dark:text-zinc-400 lg:text-zinc-300">
                    {text}{!expanded && isLong && '...'} {
                        isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100 lg:text-zinc-200 lg:hover:text-white" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                    }
                </p>
            </div>
        </div>
    )
}