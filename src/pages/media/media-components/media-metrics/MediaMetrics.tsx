import { useTranslate } from "../../../../translations/Translations"
import type { Media } from "../../../../types/tmdb"
import { filterSeasons } from "../../../../utils/tmdb/filterSeasons"
import getTmdbLanguage from "../../../../utils/tmdb/getTmdbLanguage"
import useLang from "../../../../hooks/useLang"
import MetricCard from "./components/metric-card/MetricCard"
import MetricCardSkeleton from "./components/metric-card/MetricCardSkeleton"
import UserRating from "./components/user-rating/UserRating"

export default function MediaMetrics
    ({ media, mediaType, loading }: { media: Media | null, mediaType: string | undefined, loading: boolean }) {

    const lang = useLang()

    const { line } = useTranslate()

    const isMovie = mediaType == 'movie'

    const getLocale = getTmdbLanguage(lang)

    const getTitle = (forMovie: string, forShow: string) => {
        return line(isMovie ? forMovie : forShow)
    }

    const formatCurrency = (value?: number, locale = getLocale, currency = 'USD') => {

        if (value == null) return '-'

        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            maximumFractionDigits: 0
        }).format(value)
    }

    const notInformed = line('notInformed')

    const seasons = filterSeasons(media?.seasons)

    const mediaInfo = [
        {
            title: getTitle('movieDirection', 'showCreation'),
            directors: isMovie ? media?.credits?.crew.filter(person => person.job === "Director").map(person => ({ id: person.id, name: person.name })) ?? [] : media?.created_by?.map(creator => ({ id: creator.id, name: creator.name })) ?? []
        },
        {
            title: getTitle('movieBudget', 'showSeasons'),
            content: isMovie ? (media?.budget! > 0 ? formatCurrency(media?.budget) : notInformed) : seasons.length,
        },
        {
            title: getTitle('movieRevenue', 'showEpisodes'),
            content: isMovie ? (media?.revenue! > 0 ? formatCurrency(media?.revenue) : notInformed) : media?.number_of_episodes,
        }
    ]

    return (
        <div className="w-full grid lg:grid-cols-3 auto-rows-auto gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            {
                loading ?
                    Array.from({ length: 3 }).map((_, index) => (<MetricCardSkeleton key={index} />))
                    :
                    mediaInfo.map((item, index) => (<MetricCard key={index} title={item.title} content={item.content} directors={item.directors} />))
            }
            <UserRating loading={loading} />
        </div>
    )
}