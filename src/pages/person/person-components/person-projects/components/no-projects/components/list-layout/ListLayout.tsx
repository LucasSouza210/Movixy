import LimitedGridScroll from "../../../../../../../../components/ui/scrolls/MultiRowScroll"
import CardLayout from "./components/CardLayout"

const columnsPerView = [1, 1, 1, 2]
const rowsPerView = [3, 3, 3, 3]
const gapPerBreakpoint = [4, 5, 6, 3, 4, 5]

export default function ListLayout() {
    return (
        <LimitedGridScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                Array.from({ length: 6 }).map((_, index) => (
                    <CardLayout key={index} />
                ))
            }
        </LimitedGridScroll>
    )
}