import LimitedRowsScroll from "../../../../../../../components/ui/scrolls/LimitedRowsScroll";
import MediaCardSkeleton from "../../../../../../../components/ui/cards/media-card/MediaCardSkeleton";

const columnsPerView = [2, 2, 2, 5]
const rowsPerView = [2, 2, 2, 2]
const gapPerBreakpoint = [5, 6, 7, 4, 5, 6]

export default function ListLayout() {
    return (
        <div className="w-full invisible pointer-events-none aria-hidden:true">
            <LimitedRowsScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
                {
                    Array.from({ length: 10 }).map((item, index) => (
                        <MediaCardSkeleton key={index} />
                    ))
                }
            </LimitedRowsScroll>
        </div>
    )
}