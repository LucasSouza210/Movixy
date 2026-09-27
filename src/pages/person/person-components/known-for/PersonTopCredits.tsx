import MediaCard from "../../../../components/ui/cards/media-card/MediaCard";
import MediaCardSkeleton from "../../../../components/ui/cards/media-card/MediaCardSkeleton";
import HorizontalScroll from "../../../../components/ui/scrolls/HorizontalScroll";
import type { Media, PersonCredit } from "../../../../types/tmdb";
import getTopCredits from "../../../../utils/tmdb/getTopCredits";

const itemsPerView = [2, 2, 2, 3]
const gapPerBreakpoint = [5, 6, 7, 4, 5, 6]
const scrollBarHeight = [2, 2.5, 3, 1.75, 2, 2.25]

export default function PersonTopCredits({ credits, loading }: { credits: PersonCredit[], loading: boolean }) {

    const items = loading ? Array.from({ length: 3 }) : getTopCredits(credits, 10)

    return (
        <HorizontalScroll className="pb-3 sm:pb-3.5 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-5" itemsPerView={itemsPerView} gapPerBreakpoint={gapPerBreakpoint} scrollBarHeight={scrollBarHeight}>
            {
                items.map((i, index) => (
                    loading ? <MediaCardSkeleton key={index}/> : <MediaCard media={i as Media} key={index} />
                ))
            }
        </HorizontalScroll>
    )
}