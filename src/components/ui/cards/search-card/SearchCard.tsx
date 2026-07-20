import { useContext } from "react";
import { HeaderSearchContexts } from "../../../../contexts/HeaderSearchProvider";
import { Link } from "react-router-dom";
import type { SearchContent } from "../../../../types/tmdb";
import SearchCardBadge from "./SearchCardBadge";
import SearchCardImage from "./SearchCardImage";
import SearchCardTitle from "./SearchCardTitle";

export default function SearchCard({ content }: { content: SearchContent }) {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { setCardClicked } = projectsContexts!

    const isMedia = content.media_type !== 'person'

    const cardInfo = {
        path: content.media_type == 'person' ? content.profile_path : content.poster_path,
        title: content.media_type === "person" ? content.name : (content.title ?? content.name),
        releaseYear: isMedia ? (content.release_date || content.first_air_date)?.split("-")[0] : undefined
    }

    const href = isMedia ? `/media/${content.media_type}/${content.id}` : `/person/${content.id}`

    return (
        <Link className="size-full shrink-0 flex gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 border border-default rounded-[20px] sm:rounded-3xl md:rounded-[28px] lg:rounded-[20px] xl:rounded-3xl 2xl:rounded-[28px] p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 transition-all duration-300 ease-in-out bg-white/50 hover:bg-zinc-100/50 dark:bg-zinc-900/60 dark:hover:bg-zinc-900 hover:border-zinc-400/50 dark:hover:border-zinc-700/50" to={href} onClick={() => setCardClicked(true)}>
            <SearchCardImage path={cardInfo.path} title={cardInfo.title} isMedia={isMedia} />
            <div className="size-full min-w-0 flex pt-1.5 sm:pt-2 md:pt-2.5 lg:pt-1.5 xl:pt-2 2xl:pt-2.5 relative">
                <SearchCardTitle title={cardInfo.title} year={cardInfo.releaseYear} />
                <SearchCardBadge type={content.media_type} />
            </div>
        </Link>
    )
}