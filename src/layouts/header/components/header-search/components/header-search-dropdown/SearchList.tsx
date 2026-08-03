import SearchCard from "../../../../../../components/ui/cards/search-card/SearchCard"
import VerticalScroll from "../../../../../../components/ui/scrolls/VerticalScroll"
import type { SearchContent } from "../../../../../../types/tmdb"

const itemsPerView = [4]
const gapPerBreakpoint = [4, 4.5, 5, 4, 4.5, 5]

export default function SearchList({ list }: { list: SearchContent[] | null }) {
    return (
        <VerticalScroll itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                (list ?? Array.from({ length: 4 })).map((i, index) => {
                    return (
                        list ? <SearchCard content={i} key={index} />
                            :
                            <span className="size-full rounded-[20px] sm:rounded-3xl md:rounded-[28px] lg:rounded-[20px] xl:rounded-3xl 2xl:rounded-[28px] skeleton" key={index} />
                    )
                })
            }
        </VerticalScroll>
    )
}