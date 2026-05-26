import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"
import { TbCaretLeftFilled } from "react-icons/tb";
import { TbCaretRightFilled } from "react-icons/tb";

export default function ChangeEpisode() {

    const explorer = useContext(ExplorerContexts)

    const { episodes, selectedEp, setSelectedEp } = explorer!

    return (
        <div className="h-8 sm:h-9 md:h-10 flex justify-between absolute -top-4 sm:-top-4.5 md:-top-5 left-6 sm:left-7 md:left-8 right-6 sm:right-7 md:right-8">
            {
                selectedEp > episodes[0].episode_number &&
                <button className="size-8 sm:size-9 md:size-10 flex items-center justify-center rounded-full border absolute left-0 transition-all duration-300 cursor-pointer ease-in-out group bg-zinc-300/50 hover:bg-zinc-300/70 dark:bg-black/50 dark:hover:bg-black/70 border-zinc-200/50 dark:border-zinc-500/50 dark:hover:border-zinc-400/50" onClick={() => setSelectedEp(selectedEp - 1)}>
                    <TbCaretLeftFilled className="size-4/5 fill-zinc-400/90 group-hover:fill-zinc-600/90 dark:fill-zinc-500/90 dark:group-hover:fill-zinc-300/90" />
                </button>
            }
            {
                selectedEp < episodes[episodes.length - 1].episode_number &&
                <button className="size-8 sm:size-9 md:size-10 flex items-center justify-center rounded-full border absolute right-0 transition-all duration-300 cursor-pointer ease-in-out group bg-zinc-300/50 hover:bg-zinc-300/70 dark:bg-black/50 dark:hover:bg-black/70 border-zinc-200/50 dark:border-zinc-500/50 dark:hover:border-zinc-400/50" onClick={() => setSelectedEp(selectedEp + 1)}>
                    <TbCaretRightFilled className="size-4/5 fill-zinc-400/90 group-hover:fill-zinc-600/90 dark:fill-zinc-500/90 dark:group-hover:fill-zinc-300/90" />
                </button>
            }
        </div>
    )
}