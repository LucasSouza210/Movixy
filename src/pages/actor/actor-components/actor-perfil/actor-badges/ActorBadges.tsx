import useFormattedRate from "../../../../../hooks/useFormattedRate";
import type { ActorCredits } from "../../../../../types/tmdb";
import ActorLikeButton from "./ActorLikeButton";
import { FaStar } from "react-icons/fa"
import { LuClapperboard } from "react-icons/lu";

export default function ActorBadges({ list }: { list: ActorCredits["cast"] }) {

    const formatRate = useFormattedRate

    const relevantCredits = list.filter(credit => (credit.vote_count ?? 0) >= 100)

    const averageRating = relevantCredits.reduce((acc, item) => acc + (item.vote_average ?? 0) * (item.vote_count ?? 0), 0) /
        relevantCredits.reduce((acc, item) => acc + (item.vote_count || 0), 0)

    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2">
            <ActorLikeButton/>
            <span className="w-fit flex items-center gap-0.75 sm:gap-1.25 md:gap-1.5 lg:gap-1 py-2 sm:py-2.5 md:py-3 lg:py-2 px-2.5 sm:px-3.25 md:px-4 lg:px-3 text-xs sm:text-sm md:text-base lg:text-[10px] font-medium tracking-wide leading-none border rounded-full bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-200">
                <LuClapperboard className="size-2.5 sm:size-3 md:size-3.5 lg:size-2" />
                {list.length}
            </span>
            <span className="w-fit flex items-center gap-0.75 sm:gap-1.25 md:gap-1.5 lg:gap-1 py-2 sm:py-2.5 md:py-3 lg:py-2 px-2.5 sm:px-3.25 md:px-4 lg:px-3 text-xs sm:text-sm md:text-base lg:text-[10px] font-medium tracking-wide leading-none border rounded-full bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-200">
                <FaStar className="size-2.5 sm:size-3 md:size-3.5 lg:size-2 fill-yellow-400" />
                {formatRate(averageRating)}
            </span>
        </div>

    )
}