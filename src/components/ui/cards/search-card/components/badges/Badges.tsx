import type { SearchContent } from "../../../../../../types/tmdb";
import ContentInfo from "./components/ContentInfo";
import ContentType from "./components/ContentType";

export default function Badges({ content }: { content: SearchContent, }) {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 absolute bottom-0 right-0">
            <ContentInfo content={content} />
            <ContentType type={content?.media_type} />
        </div>
    )
}