import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"
import EpisodeRating from "./EpisodeRating";
import ChangeEpisode from "./ChangeEpisode";
import EpisodeOverview from "./EpisodeOverview";
import EpisodeCardBackdrop from "./EpisodeCardBackdrop";

export default function EpisodeCard() {

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedEp } = explorer!

    const episode = episodes.find(
        (e) => e.episode_number === selectedEp
    )

    if (!episode) return null

    const path = episode.still_path


    return (
        <div className="w-full h-120 sm:h-136 md:h-158 lg:h-auto flex flex-col lg:flex-row lg:gap-8 border lg:border-none rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none relative overflow-hidden border-zinc-300 dark:border-zinc-800">
            <span className="absolute inset-0 z-10 hidden lg:block lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] bg-black/70" />
            <EpisodeCardBackdrop path={path} />
            <div className="flex-1 flex flex-col lg:inset-0 lg:absolute z-20 bg-white dark:bg-zinc-950/50 lg:bg-transparent">
                <div className="flex-1 lg:h-full flex flex-col lg:justify-between relative lg:z-20 lg:p-8 xl:p-9 2xl:p-10 lg:gap-3">
                    <ChangeEpisode />
                    <EpisodeOverview />
                    <EpisodeRating />
                </div>
            </div>
        </div>
    )
}