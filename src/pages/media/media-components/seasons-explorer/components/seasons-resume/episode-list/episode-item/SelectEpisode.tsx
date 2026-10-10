import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../../../contexts/SeasonExplorerProvider"
import { parseISO } from "date-fns"
import { LuClock3 } from "react-icons/lu";
import formatRate from "../../../../../../../../utils/tmdb/formatRate";

export default function SelectEpisode({ number, rate, release }: { number: number, rate: number, release: string | undefined }) {

    const explorer = useContext(ExplorerContexts)

    const { selectedEp, setSelectedEp } = explorer!

    const released = release ? new Date(parseISO(release)) <= new Date() : false

    const handleClick = () => {
        selectedEp !== number && setSelectedEp(number)
    }

    return (
        <button data-active={selectedEp == number} className={`w-full h-10 sm:h-11 md:h-12 lg:h-10 xl:h-11 2xl:h-12 flex items-center justify-center font-medium text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wide sm:tracking-wider md:tracking-widest lg:tracking-wider leading-none rounded-t-[10px] sm:rounded-t-[11px] md:rounded-t-xl lg:rounded-t-lg xl:rounded-t-[11px] 2xl:rounded-t-xl border-t border-x transition-all duration-300 ease-in-out ${selectedEp == number ? 'border-transparent bg-orange-500 text-white' : 'action-default border-default text-action'}`} onClick={() => handleClick()}>
            {
                released ?
                    (rate ? formatRate(rate) : 'N/A')
                    :
                    <LuClock3 />
            }
        </button>
    )
}