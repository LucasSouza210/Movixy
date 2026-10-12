import { useEffect, useState } from "react"
import RatingBadge from "./components/RatingBadge"
import RatingSlider from "./components/RatingSlider"

export default function Rating() {

    const [rating, setRating] = useState<number | null>(null)

    const [draft, setDraft] = useState(0)

    useEffect(() => {
        setDraft(rating ?? 0)
    }, [rating])

    const handleCommit = (value: number) => {
        if (value === rating) return

        if (rating === null && value === 0) return

        setRating(value)
    }

    const hasRating = rating !== null || draft > 0

    return (
        <div className="w-full flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            <RatingSlider draft={draft} onDraftChange={setDraft} onCommit={handleCommit} />
            <RatingBadge rating={hasRating ? draft : null} />
        </div>
    )
}