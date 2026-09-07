import { useEffect, useState } from "react"
import { getTrendingSuggestions } from "../../../../../../../services/tmdb/tmdb.services"
import type { SearchContent } from "../../../../../../../types/tmdb"
import { LuListFilter, LuTrendingUp } from "react-icons/lu"
import useLang from "../../../../../../../hooks/useLang"
import SearchCard from "../../../../../../../components/ui/cards/search-card/SearchCard"
import VerticalScroll from "../../../../../../../components/ui/scrolls/VerticalScroll"
import DropdownTitle from "../../../../../../../components/ui/texts/DropdownTitle"
import NoResults from "./no-results/NoResults"

const itemsPerView = [4]
const gapPerBreakpoint = [4, 4.5, 5, 4, 4.5, 5]

export default function SearchList({ title, searching, list }: { title: string, searching: boolean, list: SearchContent[] | null }) {

    const lang = useLang()

    const [suggestions, setSuggestions] = useState<SearchContent[] | null>(null)

    const displayList = searching ? list : suggestions
    const isLoading = displayList === null
    const hasResults = displayList && displayList.length > 0

    useEffect(() => {
        async function load() {
            const suggestions = await getTrendingSuggestions(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setSuggestions(suggestions)
        }

        load()
    }, [lang])

    return (
        <div className="size-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8 p-large bg-zinc-100/40 dark:bg-zinc-900/40">
            <DropdownTitle title={title} icon={searching ? LuListFilter : LuTrendingUp} />
            {
                (isLoading || hasResults) &&
                <VerticalScroll className="flex-1 min-h-0" itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                    {
                        (displayList ?? Array.from({ length: 4 })).map((item, index) => (
                            item ?
                                <SearchCard content={item} key={item.id ?? index} />
                                :
                                <span key={index} className="size-full rounded-[20px] sm:rounded-3xl md:rounded-[28px] lg:rounded-[20px] xl:rounded-3xl 2xl:rounded-[28px] skeleton" />
                        ))
                    }
                </VerticalScroll>
            }
            {
                searching && list?.length === 0 &&
                <NoResults />
            }
        </div>

    )
}