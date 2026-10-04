import type { Media, PersonCredit } from "../../../../../types/tmdb";
import LimitedRowsScroll from "../../../../../components/ui/scrolls/LimitedRowsScroll";
import MediaCard from "../../../../../components/ui/cards/media-card/MediaCard";
import MediaCardSkeleton from "../../../../../components/ui/cards/media-card/MediaCardSkeleton";

const columnsPerView = [2, 2, 2, 5]
const rowsPerView = [2, 2, 2, 2]
const gapPerBreakpoint = [5, 6, 7, 4, 5, 6]

export default function ListGrid({ items, loading }: { items: (PersonCredit | Media)[] | undefined[], loading: boolean }) {
    return (
        <LimitedRowsScroll className="w-full" columnsPerView={columnsPerView} rowsPerView={rowsPerView} gapPerBreakpoint={gapPerBreakpoint}>
            {
                items?.map((item, index) => (
                    loading ? <MediaCardSkeleton key={index} />
                        :
                        <MediaCard media={item as Media} exclude key={index} />
                ))
            }
        </LimitedRowsScroll>
    )
}