import { FaStar } from "react-icons/fa";
import formatRate from "../../../../../../../../../utils/tmdb/formatRate";

export default function RatingBadge({ rating }: { rating: number }) {
    return (
        <span className="flex items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 2xl:gap-1.25 py-1.75 sm:py-2 md:py-2.25 lg:py-1.5 xl:py-1.75 2xl:py-2 px-2.25 sm:px-2.5 md:px-2.75 lg:px-2 xl:px-2.25 2xl:px-2.5 rounded-full text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider leading-none stactic-badge text-white">
            <FaStar className="size-2.25 sm:size-2.5 md:size-2.75 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-400" />
            {
                formatRate(rating)
            }
        </span>
    )
}