import type { PersonCredit, Media } from "../../../../types/tmdb";
import { useNavigate } from "react-router-dom";
import MediaCardDetails from ".//components/MediaCardDetails";
import SaveMediaButton from "./components/SaveMediaButton";
import MediaCardPoster from "./components/MediaCardPoster";

export default function MediaCard({ media, onlyYear }: { media: Media | PersonCredit, onlyYear?: boolean }) {

    const navigate = useNavigate()

    return (
        <div className="size-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 relative group cursor-pointer shrink-0" onClick={() => navigate(`/media/${media.media_type}/${media.id}`)}>
            <MediaCardPoster path={media.poster_path} title={media.media_type == 'movie' ? media.title : media.name} />
            <MediaCardDetails media={media} onlyYear={onlyYear} />
            <SaveMediaButton />
        </div>
    )
}