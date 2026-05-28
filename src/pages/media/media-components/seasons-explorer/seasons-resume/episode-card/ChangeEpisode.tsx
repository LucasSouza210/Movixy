import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function ChangeEpisode() {

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedEp, setSelectedEp } = explorer!

    return (
        <div className="h-8 sm:h-9 md:h-10 flex justify-between absolute -top-4 sm:-top-4.5 md:-top-5 lg:top-1/2 lg:-translate-y-1/2 left-6 sm:left-7 md:left-8 right-6 sm:right-7 md:right-8">
            {
                selectedEp > episodes[0].episode_number &&
                <button className="absolute left-0 group cursor-pointer" onClick={() => setSelectedEp(selectedEp - 1)}>
                    <FiChevronLeft className="size-8 sm:size-9 md:size-10 lg:size-8 xl:size-9 2xl:size-10 text-zinc-400/90 group-hover:text-zinc-600/90 dark:text-zinc-500/90 dark:group-hover:text-zinc-300/90" />
                </button>
            }
            {
                selectedEp < episodes[episodes.length - 1].episode_number &&
                <button className="absolute right-0 group cursor-pointer" onClick={() => setSelectedEp(selectedEp + 1)}>
                    <FiChevronRight className="size-8 sm:size-9 md:size-10 lg:size-8 xl:size-9 2xl:size-10 text-zinc-400/90 group-hover:text-zinc-600/90 dark:text-zinc-500/90 dark:group-hover:text-zinc-300/90" />
                </button>
            }
        </div>
    )
}