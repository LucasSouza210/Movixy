import type { Director } from "../../types/tmdb";
import DirectorCard from "./cards/director-card/DirectorCard";
import HorizontalScroll from "./scrolls/HorizontalScroll";

export default function DirectorRow({ list }: { list: Director[] }) {
    return (
        <HorizontalScroll className="pb-5 sm:pb-6 md:pb-7 lg:pb-4 xl:pb-5 2xl:pb-6" itemsPerView={[1, 1, 1, 2]} gapPerBreakpoint={[4, 5, 6, 6, 7, 8]} scrollBarHeight={[2, 2.5, 3, 2, 2.25, 2.5]}>
            {
                list.map((i, index) => (
                    <DirectorCard director={i} key={index} />
                ))
            }
        </HorizontalScroll>
    )
}