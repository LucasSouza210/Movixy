import { parseISO } from "date-fns"
import { useMemo } from "react"
import type { Episode } from "../../../../../../../../types/tmdb"
import { FaStar } from "react-icons/fa"
import formatRate from "../../../../../../../../utils/formatters/formatRate"

export default function Rating({ episodes }: { episodes: Episode[] }) {

    const mediumRate = useMemo(() => {
        const now = new Date()

        const rated = episodes.filter(episode =>
            episode.air_date &&
            parseISO(episode.air_date) <= now &&
            episode.vote_average > 0
        )

        if (rated.length === 0) return 0

        const total = rated.reduce((acc, episode) => acc + episode.vote_average, 0)
        return total / rated.length
    }, [episodes])

    return (
        <span className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide leading-none text-default">
            <FaStar className="size-2.5 sm:size-2.75 md:size-3 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-400" />
            {formatRate(mediumRate)}
        </span>
    )
}