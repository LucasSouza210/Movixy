import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../../contexts/SeasonExplorerProvider"
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useLang from "../../../../../../../hooks/useLang";
import { getSeasonEpisodes } from "../../../../../../../services/tmdb/media";

export default function ChangeEpisode() {

    const { id } = useParams()

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedEp, setSelectedEp, selectedSeason, setSelectedSeason, setEpisodes, seasons } = explorer!

    const lang = useLang()

    const isFirst = selectedSeason == 1 && selectedEp == 1

    const isLast = !!seasons && selectedSeason === seasons.length - 1 && selectedEp === episodes[episodes.length - 1]?.episode_number

    const previousEp = async () => {
        if (selectedSeason > 1 && selectedEp === 1) {

            if (!id) return

            const previousSeason = selectedSeason - 1
            const data = await getSeasonEpisodes(Number(id), previousSeason, lang)

            setEpisodes(data)
            setSelectedSeason(previousSeason)
            setSelectedEp(data[data.length - 1]?.episode_number ?? 1)
        } else {
            setSelectedEp(prev => prev - 1)
        }
    }

    const nextEp = async () => {
        if (!seasons || !id) return

        if (selectedEp === episodes[episodes.length - 1]?.episode_number && selectedSeason < seasons.length - 1) {
            const nextSeason = selectedSeason + 1
            const data = await getSeasonEpisodes(Number(id), nextSeason, lang)

            setEpisodes(data)
            setSelectedSeason(nextSeason)
            setSelectedEp(data[0]?.episode_number ?? 1)
        } else {
            setSelectedEp(prev => prev + 1)
        }
    }

    return (
        <div className="h-8 sm:h-9 md:h-10 flex justify-between absolute -top-4 sm:-top-4.5 md:-top-5 lg:top-1/2 lg:-translate-y-1/2 left-6 sm:left-7 md:left-8 right-6 sm:right-7 md:right-8">
            {
                !isFirst &&
                <button className="absolute left-0 group cursor-pointer" onClick={() => previousEp()}>
                    <FiChevronLeft className="size-8 sm:size-9 md:size-10 lg:size-8 xl:size-9 2xl:size-10 text-zinc-400/90 group-hover:text-zinc-600/90 dark:text-zinc-500/90 dark:group-hover:text-zinc-300/90" />
                </button>
            }
            {
                !isLast &&
                <button className="absolute right-0 group cursor-pointer" onClick={() => nextEp()}>
                    <FiChevronRight className="size-8 sm:size-9 md:size-10 lg:size-8 xl:size-9 2xl:size-10 text-zinc-400/90 group-hover:text-zinc-600/90 dark:text-zinc-500/90 dark:group-hover:text-zinc-300/90" />
                </button>
            }
        </div>
    )
}