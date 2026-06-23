import type { ActorCredit, Media } from "../../../../types/tmdb";
import { useNavigate } from "react-router-dom";
import MediaCardDetails from "./MediaCardDetails";
import SaveMediaButton from "./SaveMediaButton";

export default function MediaCard({ media, onlyYear }: { media: Media | ActorCredit, onlyYear?: boolean }) {

    const navigate = useNavigate()

    

    return (
        <div className="shrink-0 flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 relative group cursor-pointer" onClick={() => navigate(`/media/${media.media_type}/${media.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original${media?.poster_path}`} alt={media?.title} loading="lazy" decoding="async" draggable={false} className="w-full aspect-2/3 object-cover rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[20px] xl:rounded-[23px] 2xl:rounded-[26px]" />
            <MediaCardDetails media={media} onlyYear={onlyYear} />
            <SaveMediaButton />
        </div>
    )
}