import { useEffect, useRef, useState } from "react"
import { getEpisodeRating, getMediaRating, setEpisodeRating, setMediaRating } from "../../services/rating-services/ratingServices"
import type { MediaType } from "../../types/tmdb"
import { emitRatingChange, episodeRatingKey, mediaRatingKey, onRatingChange } from "../../utils/eventRatings"
import useRequireLogin from "../auth/useRequireLogin"

export type RatingTarget = {
    id: number
    mediaType?: MediaType
    season?: number
    episode?: number
}

function getRatingKey({ id, mediaType, season, episode }: RatingTarget) {
    if (season !== undefined && episode !== undefined) return episodeRatingKey(id, season, episode)
    if (mediaType !== undefined) return mediaRatingKey(id, mediaType)

    return null
}

function fetchRating({ id, mediaType, season, episode }: RatingTarget) {
    if (season !== undefined && episode !== undefined) return getEpisodeRating(id, season, episode)
    if (mediaType !== undefined) return getMediaRating(id, mediaType)

    return Promise.resolve(null)
}

function saveRating({ id, mediaType, season, episode }: RatingTarget, value: number) {
    if (season !== undefined && episode !== undefined) return setEpisodeRating(id, season, episode, value)
    if (mediaType !== undefined) return setMediaRating(id, mediaType, value)

    return Promise.resolve()
}

export default function useUserRating({ id, mediaType, season, episode }: RatingTarget) {

    const { requireLogin } = useRequireLogin()

    const ratingKey = getRatingKey({ id, mediaType, season, episode })
    const canRate = ratingKey !== null && Number.isInteger(id) && id > 0

    const [rating, setRating] = useState<number | null>(null)
    const [draft, setDraft] = useState(0)

    const activeKey = useRef("")

    useEffect(() => {
        setDraft(rating ?? 0)
    }, [rating])

    useEffect(() => {
        if (!canRate || ratingKey === null) return

        activeKey.current = ratingKey

        let cancelled = false
        setRating(null)

        fetchRating({ id, mediaType, season, episode })
            .then((saved) => {
                if (!cancelled) setRating(saved)
            })
            .catch(console.error)

        return () => {
            cancelled = true
        }
    }, [canRate, ratingKey, id, mediaType, season, episode])

    useEffect(() => {
        if (!canRate || ratingKey === null) return

        return onRatingChange(ratingKey, setRating)
    }, [canRate, ratingKey])

    const commit = async (value: number) => {
        if (!canRate || ratingKey === null) return
        if (value === rating) return
        if (rating === null && value === 0) return

        const key = ratingKey
        const previous = rating
        setRating(value)

        try {
            await saveRating({ id, mediaType, season, episode }, value)

            const episodeInfo = season !== undefined && episode !== undefined ? { showId: id, season, number: episode } : undefined

            emitRatingChange({ key, rating: value, episode: episodeInfo })
        } catch (error) {
            console.error("Failed to save rating:", error)
            if (activeKey.current === key) setRating(previous)
        }
    }

    const hasRating = rating !== null || draft > 0

    return { draft, setDraft, hasRating, commit, canRate, requireRateLogin: () => requireLogin('rate') }
}