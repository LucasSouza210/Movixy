import { useContext } from "react"
import { MediaListContexts } from "../../../../../contexts/MediaListProvider"
import { useTranslate } from "../../../../../translations/Translations"
import { defaultListFilters } from "../../../../../utils/constants"

export default function ClearFilters() {

    const listContexts = useContext(MediaListContexts)

    const { setListFilters, setFilteredList } = listContexts!

    const { line } = useTranslate()

    const handleClean = () => {
        setListFilters(defaultListFilters)
        setFilteredList(null)
    }

    return (
        <button className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider transition-all duration-300 cursor-pointer ease-in-out text-default hover:text-orange-500" aria-label={line('ariaClearFilters')} onClick={() => handleClean()}>
            {line('clearFilters')}
        </button>
    )
}