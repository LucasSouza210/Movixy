import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../../../contexts/SeasonExplorerProvider"
import EpisodeInfo from "./components/episode-info/EpisodeInfo"
import EpisodeMeta from "./components/episode-meta/EpisodeMeta"

export default function EpisodeSummary() {

    const { episodes, selectedSeason, selectedEp } = useContext(ExplorerContexts)!

    const episode = episodes.find(
        (e) => e.episode_number === selectedEp
    )

    if (!episode) return null

    return (
        <div className="w-full h-full lg:h-auto flex flex-col justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 p-6 sm:p-7 md:p-8 lg:p-0">
            <EpisodeMeta season={selectedSeason} episodeNumber={episode.episode_number} airDate={episode.air_date} rating={episode.vote_average} />
            <EpisodeInfo name={episode.name} overview={episode.overview} />
        </div>
    )
}