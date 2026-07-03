import { useContext } from "react"
import { Contexts } from "../../../../contexts/ContextsProvider"
import { useTranslate } from "../../../../translations/Translations"
import getTmdbLanguage from "../../../../utils/tmdb/getTmdbLanguage"
import type { Media } from "../../../../types/tmdb"
import MediaInfoCard from "./MediaInfoCard"
import MediaInfoCardSkeleton from "./MediaInfoCardSkeleton"

export default function MediaDetails({ media, mediaType, loading }: { media: Media, mediaType: string | undefined, loading: boolean }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

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

    const mediaInfo = [
        {
            title: getTitle('movieDirection', 'showCreation'),
            directors: isMovie ? media.credits?.crew.filter(person => person.job === "Director").map(person => ({ id: person.id, name: person.name })) ?? [] : media.created_by?.map(creator => ({ id: creator.id, name: creator.name })) ?? []
        },
        {
            title: getTitle('movieBudget', 'showSeasons'),
            content: isMovie ? (media.budget! > 0 ? formatCurrency(media.budget) : notInformed) : media.number_of_seasons,
        },
        {
            title: getTitle('movieRevenue', 'showEpisodes'),
            content: isMovie ? (media.revenue! > 0 ? formatCurrency(media.revenue) : notInformed) : media.number_of_episodes,
        }
    ]

    return (
        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            {
                loading ?
                    Array.from({ length: 3 }).map((_, index) => (<MediaInfoCardSkeleton key={index} />))
                    :
                    mediaInfo.map((item, index) => (<MediaInfoCard key={index} title={item.title} content={item.content} directors={item.directors} />))
            }
        </div>
    )
}