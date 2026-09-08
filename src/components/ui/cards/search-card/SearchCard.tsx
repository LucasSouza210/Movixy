import { useContext } from "react";
import { HeaderSearchContexts } from "../../../../contexts/HeaderSearchProvider";
import { useTranslate } from "../../../../translations/Translations";
import { Link } from "react-router-dom";
import type { SearchContent } from "../../../../types/tmdb";
import SearchCardPoster from "./components/SearchCardPoster";
import SearchCardTitle from "./components/SearchCardTitle";
import Badges from "./components/badges/Badges";

export default function SearchCard({ content }: { content: SearchContent }) {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { setCardClicked } = projectsContexts!

    const { line } = useTranslate()

    const isMedia = content.media_type !== 'person'

    const cardInfo = {
        path: content.media_type == 'person' ? content.profile_path : content.poster_path,
        title: content.media_type === "person" ? content.name : (content.title?.trim() || content.name?.trim() || line('unavailableTitle')),
        releaseYear: isMedia ? (content.release_date || content.first_air_date)?.split("-")[0] : undefined
    }

    const href = isMedia ? `/media/${content.media_type}/${content.id}` : `/person/${content.id}`
    
    return (
        <Link className="size-full shrink-0 overflow-hidden flex gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 border border-default rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-2xl xl:rounded-[19px] 2xl:rounded-[22px] p-3 sm:p-3.5 md:p-4 lg:p-3 xl:p-3.5 2xl:p-4 action-default" to={href} onClick={() => setCardClicked(true)}>
            <SearchCardPoster path={cardInfo.path} title={cardInfo.title} isMedia={isMedia} />
            <div className="flex-1 min-w-0 flex pt-1.5 sm:pt-2 md:pt-2.5 lg:pt-1.5 xl:pt-2 2xl:pt-2.5 relative">
                <SearchCardTitle title={cardInfo.title} year={cardInfo.releaseYear} />
                <Badges content={content} />
            </div>
        </Link>
    )
}