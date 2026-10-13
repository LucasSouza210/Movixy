import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMediaRating, setMediaRating } from "../../../../../../../../services/rating-services/ratingServices"
import type { ListItemMediaType } from "../../../../../../../../types/tmdb"
import RatingBadge from "./components/RatingBadge"
import RatingSlider from "./components/RatingSlider"

const isMediaType = (value: string | undefined): value is ListItemMediaType => value === "movie" || value === "tv"

export default function Rating() {

    const { mediaType, id } = useParams()

    const mediaId = Number(id)
    const canRate = isMediaType(mediaType) && Number.isInteger(mediaId) && mediaId > 0

    const [rating, setRating] = useState<number | null>(null)

    const [draft, setDraft] = useState(0)

    useEffect(() => {
        setDraft(rating ?? 0)
    }, [rating])

    useEffect(() => {
        if (!canRate) return

        let cancelled = false
        setRating(null)

        getMediaRating(mediaId, mediaType)
            .then((saved) => {
                if (!cancelled) setRating(saved)
            })
            .catch(console.error)

        return () => {
            cancelled = true
        }
    }, [canRate, mediaId, mediaType])

    const handleCommit = async (value: number) => {
        if (!canRate) return
        if (value === rating) return
        if (rating === null && value === 0) return

        const previous = rating
        setRating(value)

        try {
            await setMediaRating(mediaId, mediaType, value)
        } catch (error) {
            console.error("Failed to save rating:", error)
            setRating(previous)
        }
    }

    const hasRating = rating !== null || draft > 0

    return (
        <div className="w-full flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <RatingSlider draft={draft} onDraftChange={setDraft} onCommit={handleCommit} />
            <RatingBadge rating={hasRating ? draft : null} />
        </div>
    )
}