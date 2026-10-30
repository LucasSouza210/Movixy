import { useContext } from "react"
import { ExplorerContexts } from "../../../../../../../contexts/SeasonExplorerProvider"
import { useTranslate } from "../../../../../../../translations/Translations"
import useLang from "../../../../../../../hooks/utils/useLang"

export default function SeasonOption({ seasonNumber }: { seasonNumber: number }) {

    const { selectedSeason, setSelectedSeason, setSelectedEp } = useContext(ExplorerContexts)!

    const { line } = useTranslate()

    const lang = useLang()

    const isSelected = selectedSeason == seasonNumber

    const changeSelected = () => {
        if (selectedSeason !== seasonNumber) {
            setSelectedSeason(seasonNumber)
            setSelectedEp(1)
        }
    }

    return (
        <button data-active={isSelected} className={`w-full h-full flex items-center justify-center border-b-3 sm:border-b-5 md:border-b-6 lg:border-b-4 xl:border-b-5 2xl:border-b-6 rounded-t-[10px] sm:rounded-t-[11px] md:rounded-t-xl lg:rounded-t-[10px] xl:rounded-t-[11px] 2xl:rounded-t-xl font-medium text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-widest leading-none transition-all duration-300 cursor-pointer ease-in-out shrink-0 ${isSelected ? 'text-title bg-zinc-50 dark:bg-zinc-900 border-orange-500' : 'border-transparent text-action hover:bg-zinc-50/70 dark:hover:bg-zinc-900/70'}`} aria-label={`${line('ariaSeason')} ${seasonNumber}`} onClick={() => changeSelected()}>
            {
                `${lang == 'en' ? 'S' : 'T'}${seasonNumber}`
            }
        </button>
    )
}