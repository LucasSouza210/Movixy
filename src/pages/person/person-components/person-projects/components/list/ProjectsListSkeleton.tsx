import LimitedGridScroll from "../../../../../../components/ui/scrolls/MultiRowScroll";

const columnsPerView = [1, 1, 1, 2]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 5, 6, 3, 4, 5]

export default function ProjectsListSkeleton() {
    return (
        <LimitedGridScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                Array.from({ length: 6 }).map((_, index) => (
                    <span className="w-full p-4 sm:p-4.5 md:p-5 lg:p-3 xl:p-3.5 2xl:p-4 rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] skeleton" key={index}>
                        <span className="w-1/3 aspect-2/3 block" />
                    </span>
                ))
            }
        </LimitedGridScroll>
    )
}