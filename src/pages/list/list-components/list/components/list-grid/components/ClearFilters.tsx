import { useContext } from "react"
import { MediaListContexts } from "../../../../../../../contexts/MediaListProvider"
import { useTranslate } from "../../../../../../../translations/Translations"
import { defaultListFilters } from "../../../../../../../utils/constants"

export default function ClearFilters() {

    const listContexts = useContext(MediaListContexts)

    const { filteredList, setFilteredList, setListFilters } = listContexts!

    const { line } = useTranslate()

    const label = `${filteredList?.length} ${line(filteredList?.length == 1 ? 'item' : 'items')} • ${line('clearFilters')}`

    const handleClick = () => {
        setListFilters(defaultListFilters)
        setFilteredList(null)
    }

    return (
        <button className="flex items-center absolute z-10 -top-3 sm:-top-3.5 md:-top-4 lg:-top-2.5 2xl:-top-3.5 right-0 py-2 sm:py-2.5 md:py-3 lg:py-1.5 xl:py-2 2xl:py-2.5 px-3 sm:px-3.5 md:px-4 lg:px-2.5 xl:px-3 2xl:px-3.5 border rounded-full text-xs sm:text-sm md:text-base lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider action-floating" aria-label={line('ariaClearFilters')} onClick={() => handleClick()}>
            {label}
        </button>
    )
}