import { useState } from "react"
import RatingBadge from "./components/RatingBadge"
import StarsLine from "./components/stars-line/StarsLine"

export default function Rating() {

    const [hover, setHover] = useState<number | null>(null)
    const [rating, setRating] = useState<number | null>(null)

    const active = hover ?? rating

    return (
        <div className="w-full flex items-center justify-between gap-5 sm:gap-6 md:gap-7 lg:gap-0">
            <StarsLine active={active} setHover={setHover} setRating={setRating} />
            <RatingBadge active={active} />
        </div>
    )
}