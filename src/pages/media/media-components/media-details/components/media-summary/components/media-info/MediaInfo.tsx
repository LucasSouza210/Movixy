import type { Media } from "../../../../../../../../types/tmdb";
import MediaTitle from "./components/media-title/MediaTitle";
import InfoBadges from "./components/info-badges/InfoBadges";

export default function MediaInfo({ media, mediaType, desktop, loading }: { media: Media | null, mediaType: string | undefined, desktop?: boolean, loading: boolean }) {

    const isMovie = mediaType == 'movie'

    const releaseYear = (isMovie ? media?.release_date : media?.first_air_date)?.split("-")[0]

    return (
        <div className={`flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 ${desktop ? 'hidden lg:flex' : 'flex'}`}>
            <MediaTitle title={isMovie ? media?.title : media?.name} releaseYear={releaseYear} loading={loading} />
            <InfoBadges media={media} loading={loading} />
        </div>
    )
}