import type { Media } from "../../../../types/tmdb";
import HorizontalScroll from "../../scrolls/HorizontalScroll";
import MediaCard from "../../cards/media-card/MediaCard";
import MediaCardSkeleton from "../../cards/media-card/MediaCardSkeleton";

export default function MediaRow({ content, loading, itemsPerView, gapPerBreakpoint, scrollBarHeight }: { content: Media[], loading: boolean, itemsPerView?: number[], gapPerBreakpoint?: number[], scrollBarHeight?: number[] }) {

    const items = loading ? Array.from({ length: 5 }) : content

    return (
        <HorizontalScroll className="w-full pb-4 sm:pb-5 md:pb-6 lg:pb-4 xl:pb-5 2xl:pb-6" itemsPerView={itemsPerView ?? [2, 2, 2, 5, 5, 5]} gapPerBreakpoint={gapPerBreakpoint ?? [5, 6, 7, 4, 5, 6]} scrollBarHeight={scrollBarHeight ?? [2, 2.5, 3, 2, 2.25, 2.5]}>
            {
                items.map((item, index) =>
                    loading ? <MediaCardSkeleton key={index} /> : <MediaCard media={item as Media} key={index} />
                )
            }
        </HorizontalScroll>
    )
}