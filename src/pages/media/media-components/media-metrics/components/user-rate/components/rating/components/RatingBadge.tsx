import { FaStar } from "react-icons/fa";
import formatRate from "../../../../../../../../../utils/tmdb/formatRate";

export default function RatingBadge({ rating }: { rating: number | null }) {
    return (
        <span className="w-14 sm:w-17 md:w-20 lg:w-12 xl:w-15 2xl:w-18 h-full lg:h-fit flex items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 lg:py-1.5 xl:py-1.75 2xl:py-2 shrink-0 border rounded-full font-medium tracking-wider text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-sm bg-elevated border-default text-default">
            <FaStar className="size-2.5 sm:size-3 md:size-3.5 lg:size-2 xl:size-2.5 2xl:size-3 text-yellow-500" />
            {
                rating !== null ?
                    formatRate(rating)
                    :
                    'N/A'
            }
        </span>
    )
}