import MediaCard from "../../../../components/ui/cards/media-card/MediaCard";
import MediaCardSkeleton from "../../../../components/ui/cards/media-card/MediaCardSkeleton";
import PersonCardSkeleton from "../../../../components/ui/cards/person-card/PersonCardSkeleton";
import PersonCard from "../../../../components/ui/cards/person-card/PersonCard";
import LimitedRowsScroll from "../../../../components/ui/scrolls/LimitedRowsScroll";
import type { Media, PersonCardInfo } from "../../../../types/tmdb"

export default function ListItems({ items, type }: { items: Media[] | PersonCardInfo[] | undefined, type: string | undefined }) {

    const loading = !items

    const list = loading ? Array.from({ length: 6 } as undefined[]) : items ?? []

    const getCard = (item: Media | PersonCardInfo | undefined, index: number) => {
        switch (type) {
            case "media": return loading ? <MediaCardSkeleton key={index} /> : <MediaCard media={item as Media} exclude key={index} />;
            case "person": return loading ? <PersonCardSkeleton key={index} /> : <PersonCard person={item as PersonCardInfo} key={index} />;
        }
    }

    return (
        <LimitedRowsScroll className="w-full" columnsPerView={type === 'person' ? [3, 3, 3, 6] : [2, 2, 2, 5]} rowsPerView={type === 'person' ? [4, 4, 4, 6] : [2, 2, 2, 2]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]}>
            {list.map((item, index) => getCard(item, index))}
        </LimitedRowsScroll>
    )
}   