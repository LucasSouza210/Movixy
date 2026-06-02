import type { ActorCredit, Media } from "../../../../types/tmdb";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MediaCardDetails from "./MediaCardDetails";

export default function MediaCard({ media, onlyYear }: { media: Media | ActorCredit, onlyYear?: boolean }) {

    const navigate = useNavigate()

    const getIcon = () => {
        return (
            true ? FaRegBookmark : FaBookmark
        )
    }

    return (
        <div className="shrink-0 flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 relative group cursor-pointer" onClick={() => navigate(`/media/${media.media_type}/${media.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original${media?.poster_path}`} alt={media?.title} loading="lazy" decoding="async" draggable={false} className="w-full aspect-2/3 object-cover rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[20px] xl:rounded-[23px] 2xl:rounded-[26px]" />
            <MediaCardDetails media={media} onlyYear={onlyYear} />
            <button className="hidden group-hover:flex size-8 sm:size-9 md:size-10 lg:size-6 xl:size-7 2xl:size-8 items-center justify-center border rounded-full absolute top-4 sm:top-5 md:top-6 lg:top-3 xl:top-3.5 2xl:top-4 right-4 sm:right-5 md:right-6 lg:right-3 xl:right-3.5 2xl:right-4 backdrop-blur-xs group cursor-pointer bg-zinc-400/20 border-zinc-400/30" onClick={(e) => {
                e.stopPropagation()
            }}>
                {
                    getIcon()({ className: "size-1/2 transition-all duration-300 ease-in-out fill-zinc-400 group-hover:fill-zinc-200" })
                }
            </button>
        </div>
    )
}