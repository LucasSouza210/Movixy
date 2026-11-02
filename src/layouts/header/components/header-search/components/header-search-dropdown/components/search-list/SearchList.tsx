import type { SearchContent } from "../../../../../../../../types/tmdb"
import { LuListFilter, LuTrendingUp } from "react-icons/lu"
import SearchCard from "../../../../../../../../components/ui/cards/search-card/SearchCard"
import DropdownTitle from "../../../../../../../../components/ui/texts/DropdownTitle"
import NoResults from "../no-results/NoResults"
import LimitedRowsScroll from "../../../../../../../../components/ui/scrolls/LimitedRowsScroll"
import SearchCardSkeleton from "../../../../../../../../components/ui/cards/search-card/SearchCardSkeleton"

const columnsPerView = [1]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 4.5, 5, 4, 4.5, 5]
const skeletonKeys = [0, 1, 2, 3]

type SearchListProps = {
    title: string
    searching: boolean
    list: SearchContent[] | null
    refreshing?: boolean
}

export default function SearchList({ title, searching, list, refreshing = false }: SearchListProps) {

    const isLoading = list === null
    const hasResults = list !== null && list.length > 0

    return (
        <div className="size-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 2xl:gap-7 p-large bg-zinc-100/40 dark:bg-zinc-900/40">
            <DropdownTitle title={title} icon={searching ? LuListFilter : LuTrendingUp} />
            {
                (isLoading || hasResults) &&
                <LimitedRowsScroll className={`w-full transition-opacity duration-200 ${refreshing ? "opacity-60" : "opacity-100"}`} columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                    {
                        isLoading ?
                            skeletonKeys.map((key) => <SearchCardSkeleton key={key} />)
                            :
                            list.map((item) => <SearchCard content={item} key={`${item.media_type}-${item.id}`} />)
                    }
                </LimitedRowsScroll>
            }
            {
                searching && list?.length === 0 &&
                <NoResults />
            }
        </div>
    )
}