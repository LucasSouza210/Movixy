import LimitedRowsScroll from "../../../../../../../../components/ui/scrolls/LimitedRowsScroll";
import SearchCardSkeleton from "../../../../../../../../components/ui/cards/search-card/SearchCardSkeleton";

const columnsPerView = [1]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 4.5, 5, 4, 4.5, 5]


export default function ListLayout() {
    return (
        <div className="w-full invisible pointer-events-none aria-hidden:true">
            <LimitedRowsScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                {
                    Array.from({ length: 4 }).map((_, index) => (
                        <SearchCardSkeleton key={index} />
                    ))
                }
            </LimitedRowsScroll>
        </div>
    )
}