import type { Director } from "../../../../types/tmdb";
import DirectorCard from "../../cards/director-card/DirectorCard";
import DirectorCardSkeleton from "../../cards/director-card/DirectorCardSkeleton";
import HorizontalScroll from "../../scrolls/HorizontalScroll";

export default function DirectorRow({ content, loading, itemsPerView, gapPerBreakpoint, scrollBarHeight }: { content: Director[], loading: boolean, itemsPerView?: number[], gapPerBreakpoint?: number[], scrollBarHeight?: number[] }) {

    const items = loading ? (Array.from({ length: 5 }) as Director[]) : content

    return (
        <HorizontalScroll className="pb-5 sm:pb-6 md:pb-7 lg:pb-4 xl:pb-5 2xl:pb-6" itemsPerView={itemsPerView ?? [1, 1, 1, 2]} gapPerBreakpoint={gapPerBreakpoint ?? [4, 5, 6, 6, 7, 8]} scrollBarHeight={scrollBarHeight ?? [2, 2.5, 3, 2, 2.25, 2.5]}>
            {
                items.map((item, index) =>
                    loading ? <DirectorCardSkeleton key={index} /> : <DirectorCard director={item} key={index} />
                )
            }
        </HorizontalScroll>
    )
}