import type { PersonCredit, Media } from "../../../../types/tmdb";
import { Link } from "react-router-dom";
import MediaCardDetails from "./components/media-card-details/MediaCardDetails";
import CardPoster from "./components/card-poster/CardPoster";

export default function MediaCard({ media, onlyYear, hideSave }: { media: Media | PersonCredit, onlyYear?: boolean, hideSave?: boolean }) {
    return (
        <Link to={`/media/${media.media_type}/${media.id}`} className="size-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 group shrink-0">
            <CardPoster media={media} hideSave={hideSave}/>
            <MediaCardDetails media={media} onlyYear={onlyYear} />
        </Link>
    )
}