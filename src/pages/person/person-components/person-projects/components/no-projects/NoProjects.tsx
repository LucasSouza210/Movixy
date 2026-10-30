import { useContext } from "react"
import { MediaListContexts } from "../../../../../../contexts/MediaListProvider"
import Empty from "../../../../../../components/ui/commons/empty/Empty"
import NothingToShow from "./components/NothingToShow"
import ListLayout from "./components/list-layout/ListLayout"

export default function NoProjects() {

    const { listFilters, filteredList } = useContext(MediaListContexts)!

    const hasActiveFilters = listFilters.type !== "all" || listFilters.genres.length > 0 || listFilters.rate.min !== null || listFilters.rate.max !== null

    const noFilteredResults = hasActiveFilters && filteredList?.length === 0

    return (
        <div className="w-full flex flex-col items-center justify-center gap-2 relative">
            <div className="size-full flex items-center justify-center absolute z-10">
                {
                    noFilteredResults ?
                        <Empty results />
                        :
                        <NothingToShow />
                }
            </div>
            <ListLayout />
        </div>
    )
}