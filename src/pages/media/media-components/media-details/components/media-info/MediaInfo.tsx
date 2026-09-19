import type { Media, MediaInfoBadges } from "../../../../../../types/tmdb";
import { getCertification } from "../../../../../../utils/tmdb/getCertification";
import MediaTitle from "./components/media-title/MediaTitle";
import InfoBadges from "./components/info-badges/InfoBadges";

export default function MediaInfo({ media, mediaType, desktop, loading }: { media: Media | null, mediaType: string | undefined, desktop?: boolean, loading: boolean }) {

    const certification = getCertification(media, mediaType!)

    const isMovie = mediaType == 'movie'

    const releaseYear = (isMovie ? media?.release_date : media?.first_air_date)?.split("-")[0]

    const mediaInfo: MediaInfoBadges = {
        rate: media?.vote_average,
        runtime: media?.runtime,
        seasons: media?.number_of_seasons,
        certification: certification
    }

    return (
        <div className={`flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 ${desktop ? 'hidden lg:flex' : 'flex'}`}>
            <MediaTitle title={isMovie ? media?.title : media?.name} releaseYear={releaseYear} loading={loading} />
            <InfoBadges info={mediaInfo} loading={loading} />
        </div>
    )
}