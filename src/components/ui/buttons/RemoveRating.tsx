import { useEffect, useState } from "react"
import { getEpisodeRating, getMediaRating, removeEpisodeRating, removeMediaRating } from "../../../services/rating-services/ratingServices"
import { emitRatingChange, episodeRatingKey, mediaRatingKey, onRatingChange } from "../../../utils/eventRatings"
import { useTranslate } from "../../../translations/Translations"
import { LuTrash2 } from "react-icons/lu"

type Episode = {
    season: number
    number: number
}

type Props = {
    episode?: Episode
    mediaId: number
    mediaType?: "movie" | "tv"
    defaultStyle?: boolean
    mobile?: boolean
}

export default function RemoveRating({ episode, mediaId, mediaType = "tv", defaultStyle, mobile }: Props) {

    const { line } = useTranslate()

    const [hasRating, setHasRating] = useState(false)
    const [loading, setLoading] = useState(false)

    const season = episode?.season
    const number = episode?.number

    const isEpisode = season !== undefined && number !== undefined

    const ratingKey = isEpisode ? episodeRatingKey(mediaId, season, number) : mediaRatingKey(mediaId, mediaType)

    useEffect(() => {
        let cancelled = false

        setHasRating(false)

        const request = isEpisode ? getEpisodeRating(mediaId, season, number) : getMediaRating(mediaId, mediaType)

        request
            .then((saved) => {
                if (!cancelled) setHasRating(saved !== null)
            })
            .catch(console.error)

        const unsubscribe = onRatingChange(ratingKey, (rating) => setHasRating(rating !== null))

        return () => {
            cancelled = true
            unsubscribe()
        }
    }, [ratingKey, isEpisode, mediaId, mediaType, season, number])

    const handleRemove = async () => {
        if (loading) return

        setLoading(true)

        try {
            if (isEpisode) {
                await removeEpisodeRating(mediaId, season, number)
                emitRatingChange({ key: ratingKey, rating: null, episode: { showId: mediaId, season, number } })
            } else {
                await removeMediaRating(mediaId, mediaType)
                emitRatingChange({ key: ratingKey, rating: null })
            }
        } catch (error) {
            console.error("Failed to remove rating:", error)
        } finally {
            setLoading(false)
        }
    }

    if (!hasRating) return null

    return (
        <button type="button" aria-label={line('ariaRemoveRating')} className={`size-7 sm:size-8 md:size-9 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border rounded-full absolute top-6 sm:top-7 md:top-8 right-6 sm:right-7 md:right-8 group ${defaultStyle ? 'lg:top-5 xl:top-6 2xl:top-7 lg:right-5 xl:right-6 2xl:right-7 action-elevated border-action' : `lg:relative lg:top-auto lg:right-auto ${mobile ? 'flex lg:hidden action-elevated border-action' : 'hidden lg:flex lg:action-poster border-action-poster'}`}`} disabled={loading} onClick={handleRemove}>
            <LuTrash2 aria-hidden="true" className={`size-1/2 shrink-0 block ${defaultStyle ? 'text-action-group' : `${mobile ? 'text-action-group' : 'text-action-icon-group'}`}`} />
        </button>
    )
}