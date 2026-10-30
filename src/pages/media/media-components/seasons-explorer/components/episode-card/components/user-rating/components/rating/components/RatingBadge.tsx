import { FaStar } from "react-icons/fa";
import formatRate from "../../../../../../../../../../../utils/formatters/formatRate";

export default function RatingBadge({ rating }: { rating: number | null }) {
    return (
        <span className="w-12 sm:w-15 md:w-18 lg:w-12 xl:w-15 2xl:w-18 flex items-center justify-center gap-0.75 sm:gap-1 md:gap-1.25 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 py-2 sm:py-2.25 md:py-2.5 lg:py-2 xl:py-2.25 2xl:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium md:tracking-wide leading-none border rounded-full shrink-0 bg-elevated border-default text-default lg:bg-zinc-900/50 lg:border-zinc-700/60 lg:text-zinc-300">
            <FaStar className="size-2 sm:size-2.25 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5 text-yellow-500" />
            {
                rating !== null ?
                    formatRate(rating)
                    :
                    'N/A'
            }
        </span>
    )
}