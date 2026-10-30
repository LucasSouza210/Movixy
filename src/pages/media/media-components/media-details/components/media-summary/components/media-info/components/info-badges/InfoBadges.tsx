import { formatRuntime } from "../../../../../../../../../../utils/tmdb/formatRuntime";
import { useParams } from "react-router-dom";
import { getCertification } from "../../../../../../../../../../utils/tmdb/getCertification";
import { isMediaType } from "../../../../../../../../../../utils/tmdb/isMediaType";
import { FaClock, FaStar } from "react-icons/fa"
import type { Lang, MediaBadge, MediaDetails } from "../../../../../../../../../../types/tmdb";
import formatRate from "../../../../../../../../../../utils/tmdb/formatRate";
import useLang from "../../../../../../../../../../hooks/utils/useLang";
import InfoBadgesSkeleton from "./InfoBadgesSkeleton";
import Badge from "./components/Badge";

export default function InfoBadges({ media, loading }: { media: MediaDetails | null, loading: boolean }) {

    const { mediaType } = useParams()

    const lang = useLang()

    const certification = isMediaType(mediaType) ? getCertification(media, mediaType, lang) : null

    const getSeasonsLabel = (lang: Lang, number: number) => {
        switch (lang) {
            case 'en':
                return number === 1 ? `${number} season` : `${number} seasons`
            default:
                return number === 1 ? `${number} temporada` : `${number} temporadas`
        }
    }

    const badges: MediaBadge[] = [
        {
            icon: FaStar,
            content: media?.vote_average ? formatRate(media.vote_average) : 'N/A',
            isRating: true
        },
        {
            icon: FaClock,
            content: media?.runtime != null ? formatRuntime(media?.runtime as number) : (media?.number_of_seasons != null ? getSeasonsLabel(lang, media?.number_of_seasons as number) : 'N/A')
        },
        {
            content: certification ?? 'N/A',
            square: true
        }
    ]

    return (
        loading ? <InfoBadgesSkeleton />
            :
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
                {
                    badges.map((i, index) => (
                        <Badge icon={i.icon} text={i.content} square={i.square} isRating={i.isRating} key={index} />
                    ))
                }
            </div>
    )
}