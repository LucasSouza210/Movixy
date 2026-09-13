import type { PersonCredit, Media } from "../../../../types/tmdb";
import { Link } from "react-router-dom";
import MediaCardDetails from "./components/media-card-details/MediaCardDetails";
import SaveMediaButton from "./components/SaveMediaButton";
import MediaCardPoster from "./components/MediaCardPoster";

export default function MediaCard({ media, onlyYear, hideSave }: { media: Media | PersonCredit, onlyYear?: boolean, hideSave?: boolean }) {
    return (
        <Link to={`/media/${media.media_type}/${media.id}`} className="size-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 relative group cursor-pointer shrink-0">
            <MediaCardPoster path={media.poster_path} title={media.media_type == 'movie' ? media.title : media.name} />
            <MediaCardDetails media={media} onlyYear={onlyYear} />
            {
                !hideSave &&
                <SaveMediaButton media={media} />
            }
        </Link>
    )
}