import MediaCard from "../../../../components/ui/cards/media-card/MediaCard";
import HorizontalScroll from "../../../../components/ui/scrolls/HorizontalScroll";
import type { PersonCredit } from "../../../../types/tmdb";
import getTopCredits from "../../../../utils/tmdb/getTopCredits";

export default function PersonTopCredits({ credits }: { credits: PersonCredit[] }) {
    return (
        <HorizontalScroll className="pb-3 sm:pb-3.5 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-5" itemsPerView={[2, 2, 2, 3]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.5, 3, 1.75, 2, 2.25]}>
            {
                getTopCredits(credits, 10).map((i, index) => (
                    <MediaCard media={i} key={index} />
                ))
            }
        </HorizontalScroll>
    )
}