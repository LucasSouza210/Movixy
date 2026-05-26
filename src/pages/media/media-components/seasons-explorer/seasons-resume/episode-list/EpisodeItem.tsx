import { useContext } from "react"
import useFormattedRate from "../../../../../../hooks/useFormattedRate"
import { ExplorerContexts } from "../../../../../../contexts/SeasonExplorerProvider"

export default function EpisodeItem({ number, rate }: { number: number, rate: number }) {

    const explorer = useContext(ExplorerContexts)

    const { selectedEp, setSelectedEp } = explorer!

    const formatRate = useFormattedRate

    return (
        <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 shrink-0">
            <button className={`${selectedEp == number ? 'border-transparent bg-orange-500 text-white' : 'cursor-pointer bg-zinc-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100'} w-full h-8 sm:h-9 md:h-10 flex items-center justify-center font-medium text-xs sm:text-[13px] md:text-sm tracking-wide sm:tracking-wider md:tracking-widest leading-none rounded-t-xl sm:rounded-t-[14px] md:rounded-t-2xl border-t border-x transition-all duration-300 ease-in-out`} onClick={() => {
                selectedEp !== number && setSelectedEp(number)
            }}>
                {formatRate(rate)}
            </button>
            <p className="font-medium text-sm sm:text-[15px] md:text-base tracking-wider leading-none text-zinc-500 dark:text-zinc-400">E{number}</p>
        </div>
    )
}