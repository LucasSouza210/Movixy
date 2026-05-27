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
        <div className="w-full flex flex-col lg:flex-row lg:gap-8 border lg:border-none rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none overflow-hidden border-zinc-300 dark:border-zinc-800">
            <img src={`https://image.tmdb.org/t/p/original${path}`} alt="" className="w-full lg:w-5/10 lg:min-w-0 h-auto lg:min-h-64 object-cover border-b lg:shrink-0 lg:rounded-3xl lg:hidden border-zinc-300 dark:border-zinc-700" />
            <div className="w-full flex flex-col lg:relative">
                <div className="hidden lg:block relative lg:rounded-[30px] overflow-hidden">
                    <span className="size-full absolute z-10 bg-black/70" />
                    <img src={`https://image.tmdb.org/t/p/original${path}`} alt="" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full lg:inset-0 flex flex-col lg:justify-between relative lg:absolute lg:z-20 p-6 sm:p-7 md:p-8 lg:p-8 gap-3 sm:gap-4 md:gap-5 lg:gap-3">
                    <div className="block lg:hidden">
                        <ChangeEpisode />
                    </div>
                    <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-4">
                        <div className="w-full flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6">
                            <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 text-xs sm:text-sm md:text-base lg:text-sm font-medium tracking-wide sm:tracking-wider leading-none text-zinc-500 dark:text-zinc-400 lg:text-zinc-300">
                                {`${lang == 'en' ? 'S' : 'T'}${selectedSeason}`}.{`E${episode.episode_number}`}
                                <TbPointFilled className="size-1.5 sm:size-2 md:size-2.5" />
                                {`${useFormattedDate(episode.air_date)}`}
                            </p>
                            <p className="flex items-center gap-0.75 sm:gap-1 md:gap-1.25 lg:gap-0.75 text-xs sm:text-sm md:text-base lg:text-sm font-medium tracking-wide sm:tracking-wider leading-none text-zinc-700 dark:text-zinc-300 lg:text-zinc-100">
                                <FaStar className="size-2 sm:gap-2.25 md:size-2.5 fill-yellow-400" />
                                {useFormattedRate(episode.vote_average)}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1">
                            <p className="text-base sm:text-lg md:text-xl lg:text-base font-semibold tracking-wider sm:tracking-[0.075em] md:tracking-widest leading-5.5 text-black dark:text-white lg:text-white">{episode.name}</p>
                            <p className="lg:max-w-70 text-sm sm:text-base md:text-lg lg:text-sm font-medium tracking-wider leading-5 sm:leading-5.25 md:leading-6.5 lg:leading-5 text-zinc-600 dark:text-zinc-400 lg:text-zinc-300">
                                {text}{!expanded && isLong && '...'} {
                                    isLong && <button className="transition-all duration-300 cursor-pointer ease-in-out text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100 lg:text-zinc-200 lg:hover:text-white" onClick={() => setExpanded(prev => !prev)}>{line(expanded ? 'readLess' : 'readMore')}</button>
                                }
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <EpisodeRating />
                    </div>
                </div>
                <div className="block lg:hidden">
                    <EpisodeRating />
                </div>
            </div>
        </div>
    )
}