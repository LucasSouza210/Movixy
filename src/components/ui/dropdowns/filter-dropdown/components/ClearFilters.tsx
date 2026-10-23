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
        <button className="w-fit text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider text-action" aria-label={line('ariaClearFilters')} onClick={() => handleClean()}>
            {
                line('clearFilters')
            }
        </button>
    )
}