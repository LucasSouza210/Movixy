import { useContext } from "react";
import { useTranslate } from "../../../../../translations/Translations";
import { Contexts } from "../../../../../contexts/ContextsProvider";
import useFormattedRate from "../../../../../hooks/useFormattedRate";
import { TbPointFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { ExplorerContexts } from "../../../../../contexts/SeasonExplorerProvider";


export default function SeasonOverview() {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const explorer = useContext(ExplorerContexts)

    const { selectedSeason, episodes } = explorer!

    const { line } = useTranslate()

    const formatRate = useFormattedRate

    const episodesLabel = episodes?.length === 1 ? line('showEpisodes').slice(0, -1) : line('showEpisodes')

    const mediumRate = episodes?.length ? (episodes?.reduce((acc, episode) => acc + episode.vote_average, 0)) / episodes?.length : 0


    return (
        <div className="flex items-center gap-4">
            <p className="flex items-center gap-0.5 text-xs font-medium tracking-wider leading-none text-zinc-400 dark:text-zinc-300">{`${lang == 'en' ? 'S' : 'T'}${selectedSeason}`} <TbPointFilled className="size-1.5" /> <span className="lowercase">{`${episodes?.length} ${episodesLabel}`}</span></p>
            <span className="flex items-center gap-1 text-xs font-medium tracking-wide leading-none text-zinc-600 dark:text-zinc-100">
                <FaStar className="size-2.5 fill-yellow-400" />
                {formatRate(mediumRate)}
            </span>
        </div>
    )
}