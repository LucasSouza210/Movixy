import { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { ExplorerContexts } from "../../../../../../../../../../contexts/SeasonExplorerProvider"
import { getEpisodeRating, setEpisodeRating } from "../../../../../../../../../../services/rating-services/ratingServices"
import RatingSlider from "./components/RatingSlider"
import RatingBadge from "./components/RatingBadge"

export default function Rating() {

    const { id } = useParams()
    const { selectedSeason, selectedEp } = useContext(ExplorerContexts)!

    const showId = Number(id)
    const canRate = Number.isInteger(showId) && showId > 0

    const [rating, setRating] = useState<number | null>(null)

    const [draft, setDraft] = useState(0)

    const activeKey = useRef("")
    const episodeKey = `${showId}-${selectedSeason}-${selectedEp}`

    useEffect(() => {
        setDraft(rating ?? 0)
    }, [rating])

    useEffect(() => {
        if (!canRate) return

        activeKey.current = episodeKey

        let cancelled = false
        setRating(null)

        getEpisodeRating(showId, selectedSeason, selectedEp)
            .then((saved) => {
                if (!cancelled) setRating(saved)
            })
            .catch(console.error)

        return () => {
            cancelled = true
        }
    }, [canRate, showId, selectedSeason, selectedEp, episodeKey])

    const handleCommit = async (value: number) => {
        if (!canRate) return
        if (value === rating) return
        if (rating === null && value === 0) return

        const key = episodeKey
        const previous = rating
        setRating(value)

        try {
            await setEpisodeRating(showId, selectedSeason, selectedEp, value)
        } catch (error) {
            console.error("Failed to save rating:", error)
            if (activeKey.current === key) setRating(previous)
        }
    }

    const hasRating = rating !== null || draft > 0

    return (
        <div className="w-full flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <RatingSlider draft={draft} onDraftChange={setDraft} onCommit={handleCommit} />
            <RatingBadge rating={hasRating ? draft : null} />
        </div>
    )
}