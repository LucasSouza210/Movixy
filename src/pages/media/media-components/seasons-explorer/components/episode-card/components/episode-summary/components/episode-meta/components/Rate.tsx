import { FaStar } from "react-icons/fa";
import formatRate from "../../../../../../../../../../../utils/formatters/formatRate";

export default function Rate({ rating }: { rating: number }) {
    return (
        <p className="flex items-center gap-0.75 sm:gap-1 md:gap-1.25 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide sm:tracking-wider leading-none text-default lg:text-zinc-300">
            <FaStar className="size-2 sm:gap-2.25 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-400" />
            {
                formatRate(rating)
            }
        </p>
    )
}