import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"
import EpisodeRating from "./EpisodeRating";
import ChangeEpisode from "./ChangeEpisode";
import EpisodeOverview from "./EpisodeOverview";

export default function EpisodeCard() {

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedEp } = explorer!

    const episode = episodes.find(
        (e) => e.episode_number === selectedEp
    )

    if (!episode) return null

    const path = episode.still_path


    return (
        <div className="w-full flex flex-col lg:flex-row lg:gap-8 border lg:border-none rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-4xl relative overflow-hidden border-zinc-300 dark:border-zinc-800">
            <span className="absolute inset-0 z-10 hidden lg:block bg-black/70" />
            <img src={`https://image.tmdb.org/t/p/original${path}`} alt="" className="w-full h-auto object-cover" />
            <div className="flex flex-col lg:inset-0 lg:absolute z-20 bg-white dark:bg-zinc-950/50">
                <div className="w-full lg:h-full flex flex-col lg:justify-between relative lg:absolute lg:z-20 lg:p-8 gap-3 sm:gap-4 md:gap-5 lg:gap-3">
                    <ChangeEpisode />
                    <EpisodeOverview />
                    <EpisodeRating />
                </div>
            </div>
        </div>
    )
}