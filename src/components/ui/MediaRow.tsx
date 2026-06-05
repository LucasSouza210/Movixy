import type { Media } from "../../types/tmdb";
import HorizontalScroll from "./scrolls/HorizontalScroll";
import MediaCard from "./cards/media-card/MediaCard";

export default function MediaRow({ content }: { content: Media[] }) {
    return (
        <HorizontalScroll className="w-full pb-4 sm:pb-5 md:pb-6 lg:pb-4 xl:pb-5 2xl:pb-6" itemsPerView={[2, 2, 2, 5, 5, 5]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.5, 3, 2, 2.25, 2.5]}>
            {
                content?.map((i, index) => (
                    <MediaCard media={i} key={index} />
                ))
            }
        </HorizontalScroll>
    )
}