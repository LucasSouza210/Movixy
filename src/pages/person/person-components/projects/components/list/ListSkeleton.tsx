import LimitedRowsScroll from "../../../../../../components/ui/scrolls/LimitedRowsScroll";
import ProjectCardSkeleton from "../../../../../../components/ui/cards/project-card/ProjectCardSkeleton";

const columnsPerView = [1, 1, 1, 2]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 5, 6, 3, 4, 5]

export default function ListSkeleton() {
    return (
        <LimitedRowsScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                Array.from({ length: 6 }).map((_, index) => (
                    <ProjectCardSkeleton key={index}/>
                ))
            }
        </LimitedRowsScroll>
    )
}