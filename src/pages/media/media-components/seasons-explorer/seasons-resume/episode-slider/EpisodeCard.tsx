import { useContext, useState } from "react"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"
import { Contexts } from "../../../../../../contexts/ContextsProvider"
import { useFormattedDate } from "../../../../../../hooks/useFormattedDate";
import useFormattedRate from "../../../../../../hooks/useFormattedRate";
import { useTranslate } from "../../../../../../translations/Translations";
import { TbPointFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import EpisodeRating from "./EpisodeRating";
import ChangeEpisode from "./ChangeEpisode";

export default function EpisodeCard() {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedSeason, selectedEp } = explorer!

    const { line } = useTranslate()

    const [expanded, setExpanded] = useState(false)

    const episode = episodes.find(
        (e) => e.episode_number === selectedEp
    )

    if (!episode) return null

    const path = episode.still_path


    const limit = 76,
        isLong = episode.overview?.length! > limit,
        text = expanded ? episode.overview : episode.overview?.slice(0, limit);

    return (
        <div className="w-full flex flex-col border rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden border-zinc-300 dark:border-zinc-800">
            <img src={`https://image.tmdb.org/t/p/original${path}`} alt="" className="w-full h-auto object-cover border-b border-zinc-300 dark:border-zinc-700" />
            <div className="w-full flex flex-col relative bg-white dark:bg-zinc-950/50">
                <ChangeEpisode />
                <div className="w-full flex flex-col p-6 sm:p-7 md:p-8 gap-3 sm:gap-4 md:gap-5">
                    <div className="w-full flex items-center gap-4 sm:gap-5 md:gap-6">
                        <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 text-xs sm:text-sm md:text-base font-medium tracking-wide sm:tracking-wider leading-none text-zinc-500 dark:text-zinc-400">
                            {`${lang == 'en' ? 'S' : 'T'}${selectedSeason}`}.{`E${episode.episode_number}`}
                            <TbPointFilled className="size-1.5 sm:size-2 md:size-2.5" />
                            {`${useFormattedDate(episode.air_date)}`}
                        </p>
                        <p className="flex items-center gap-0.75 sm:gap-1 md:gap-1.25 text-xs sm:text-sm md:text-base font-medium tracking-wide sm:tracking-wider leading-none text-zinc-700 dark:text-zinc-300">
                            <FaStar className="size-2 sm:gap-2.25 md:size-2.5 fill-yellow-400" />
                            {useFormattedRate(episode.vote_average)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                        <p className="text-base md:text-xl font-semibold tracking-wider sm:tracking-[0.075em] md:tracking-widest leading-5.5 text-black dark:text-white">{episode.name}</p>
                        <p className="text-sm md:text-lg font-medium tracking-wider leading-5 sm:leading-5.25 md:leading-6.5 text-zinc-600 dark:text-zinc-400">
                            {text}{!expanded && isLong && '...'} {
                                isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                            }
                        </p>
                    </div>
                </div>
                <EpisodeRating />
            </div>
        </div>
    )
}