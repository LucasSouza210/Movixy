import type { Media } from "../../../../../../types/tmdb";
import Trailer from "./components/Trailer";
import Save from "./components/Save";

export default function Actions({ media, mediaType, mobile }: { media: Media | null, mediaType: string | undefined, mobile?: boolean }) {
    return (
        <div className={`flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-3.5 2xl:gap-4 flex-wrap ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            <Trailer id={media?.id} type={mediaType} />
            <Save media={media} mediaType={mediaType} />
        </div>
    )
}