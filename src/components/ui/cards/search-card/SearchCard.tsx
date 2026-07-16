import type { SearchContent } from "../../../../types/tmdb";
import SearchCardImage from "./SearchCardImage";

export default function SearchCard({ content }: { content: SearchContent }) {

    const isMedia = content.media_type !== 'person'
    const path = content.media_type == 'person' ? content.profile_path : content.poster_path
    const title = content.media_type === "person" ? content.name : (content.title ?? content.name)

    return (
        <div className="w-full h-24 flex gap-3 border border-default rounded-[20px] p-3 bg-white/50 dark:bg-zinc-900/70">
            <SearchCardImage path={path} title={title} isMedia={isMedia} />
            <div className="h-full flex pt-3">
                <p className="text-xs font-medium tracking-wide leading-none line-clamp-1 text-black dark:text-white">{title}</p>
            </div>
        </div>
    )
}