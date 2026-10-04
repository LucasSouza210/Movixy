import { useContext } from "react"
import { MediaListContexts } from "../../../../../../../contexts/MediaListProvider"
import { applyListFilters } from "../../../../../../../utils/tmdb/applyFilters"
import type { Media, PersonCredit } from "../../../../../../../types/tmdb";
import { BsCheckLg } from "react-icons/bs";
import formatRate from "../../../../../../../utils/tmdb/formatRate"


export default function ApplyFilters({ close }: { close: () => void }) {

    const listContexts = useContext(MediaListContexts)

    const { list, setFilteredList, listFilters, setListFilters } = listContexts!

    const applyFilters = () => {

        if (listFilters.type === "all" && listFilters.genres.length === 0 && listFilters.rate.min === null && listFilters.rate.max === null) {
            setFilteredList(null)
            close()
            return
        }

        if (listFilters.rate.max !== null && listFilters.rate.min !== null && listFilters.rate.max < listFilters.rate.min) {
            setListFilters(prev => ({
                ...prev,
                rate: {
                    ...prev.rate,
                    error: false
                }
            }))
            return
        }
        setListFilters(prev => ({
            ...prev,
            rate: {
                ...prev.rate,
                error: false
            }
        }))

        const newList = applyListFilters(list, listFilters, formatRate)

        //check later

        setFilteredList(newList as Media[] | PersonCredit[])
        close()
    }

    return (
        <button className="size-8 sm:size-9 md:size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-brand" onClick={() => applyFilters()}>
            <BsCheckLg className="size-3/5 fill-zinc-100 group-hover:fill-white" />
        </button>
    )
}