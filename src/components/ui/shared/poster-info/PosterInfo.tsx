import type { Media } from "../../../../types/tmdb";
import Info from "./components/info/Info"
import Links from "./components/links/Links";

export default function PosterInfo({ media, bottom }: { media: Media | null, bottom?: boolean }) {
    return (
        <div className={`flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6 ${bottom && 'mb-11 sm:mb-13 md:mb-15 lg:mb-8 xl:mb-9.5 2xl:mb-11'}`}>
            <Info title={media?.title ?? media?.name} average={media?.vote_average} release={media?.release_date ?? media?.first_air_date} />
            <Links id={media?.id} type={media?.media_type} />
        </div>
    )
}