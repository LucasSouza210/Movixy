import { useContext } from "react"
import { Contexts } from "../../../../contexts/ContextsProvider"
import { useTranslate } from "../../../../translations/Translations"
import getTmdbLanguage from "../../../../utils/getTmdbLanguage"
import type { Media } from "../../../../types/tmdb"
import MediaInfoCard from "./MediaInfoCard"

export default function MediaDetails({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

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
            content: isMovie ? media.credits?.crew.find(person => person.job === 'Director')?.name : media.created_by?.map(creator => creator.name).join(', ')
        },
        {
            title: getTitle('movieBudget', 'showSeasons'),
            content: isMovie ? (media.budget! > 0 ? formatCurrency(media.budget) : notInformed) : media.number_of_seasons
        },
        {
            title: getTitle('movieRevenue', 'showEpisodes'),
            content: isMovie ? (media.revenue! > 0 ? formatCurrency(media.revenue) : notInformed) : media.number_of_episodes
        }
    ]

    return (
        <div className="w-full flex flex-col gap-4">
            {
                mediaInfo?.map((i, index) => (
                    <MediaInfoCard title={i.title} content={i.content} key={index} />
                ))
            }
        </div>
    )
}