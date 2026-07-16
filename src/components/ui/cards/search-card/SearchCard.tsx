import { Link } from "react-router-dom";
import type { SearchContent } from "../../../../types/tmdb";
import SearchCardBadge from "./SearchCardBadge";
import SearchCardImage from "./SearchCardImage";
import SearchCardTitle from "./SearchCardTitle";

export default function SearchCard({ content }: { content: SearchContent }) {

    const isMedia = content.media_type !== 'person'

    const cardInfo = {
        path: content.media_type == 'person' ? content.profile_path : content.poster_path,
        title: content.media_type === "person" ? content.name : (content.title ?? content.name),
        releaseYear: isMedia ? (content.release_date || content.first_air_date)?.split("-")[0] : undefined
    }

    const href = isMedia ? `/media/${content.media_type}/${content.id}` : `/person/${content.id}`

    return (
        <Link className="w-full h-24 flex gap-3 border border-default rounded-[20px] p-3 transition-all duration-300 ease-in-out bg-white/50 hover:bg-zinc-100/50 dark:bg-zinc-900/60 dark:hover:bg-zinc-900 hover:border-zinc-400/50 dark:hover:border-zinc-700/50" to={href}>
            <SearchCardImage path={cardInfo.path} title={cardInfo.title} isMedia={isMedia} />
            <div className="size-full min-w-0 flex pt-3 relative">
                <SearchCardTitle title={cardInfo.title} year={cardInfo.releaseYear} />
                <SearchCardBadge type={content.media_type} />
            </div>
        </Link>
    )
}