import type { ListItemMediaType } from "../types/tmdb"

export type RatingChange = {
    key: string
    rating: number | null
    episode?: {
        showId: number
        season: number
        number: number
    }
}

const ratingChangedEvent = "rating-changed"

export const mediaRatingKey = (mediaId: number, mediaType: ListItemMediaType) => `${mediaType}-${mediaId}`

export const episodeRatingKey = (showId: number, season: number, episode: number) => `episode-${showId}-${season}-${episode}`

export function emitRatingChange(change: RatingChange) {
    window.dispatchEvent(new CustomEvent<RatingChange>(ratingChangedEvent, { detail: change }))
}

export function onAnyRatingChange(listener: (change: RatingChange) => void) {
    const handler = (event: Event) => listener((event as CustomEvent<RatingChange>).detail)

    window.addEventListener(ratingChangedEvent, handler)

    return () => window.removeEventListener(ratingChangedEvent, handler)
}

export function onRatingChange(key: string, listener: (rating: number | null) => void) {
    return onAnyRatingChange((change) => {
        if (change.key === key) listener(change.rating)
    })
}