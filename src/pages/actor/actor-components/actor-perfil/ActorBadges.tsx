import useFormattedRate from "../../../../hooks/useFormattedRate";
import type { ActorCredits } from "../../../../types/tmdb";
import { FaStar } from "react-icons/fa"
import { LuClapperboard } from "react-icons/lu";

export default function ActorBadges({ list }: { list: ActorCredits["cast"] }) {

    const formatRate = useFormattedRate

    const relevantCredits = list.filter(credit => (credit.vote_count ?? 0) >= 100)

    const averageRating = relevantCredits.reduce((acc, item) => acc + (item.vote_average ?? 0) * (item.vote_count ?? 0), 0) /
        relevantCredits.reduce((acc, item) => acc + (item.vote_count || 0), 0)

    return (
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <span className="w-fit flex items-center gap-0.75 sm:gap-1.25 md:gap-1.5 py-2 sm:py-2.5 md:py-3 px-2.5 sm:px-3.25 md:px-4 text-xs sm:text-sm md:text-base font-medium tracking-wide leading-none border rounded-full bg-white/50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-200">
                <LuClapperboard className="size-2.5 sm:size-3 md:size-3.5"/>
                {list.length}
            </span>
            <span className="w-fit flex items-center gap-0.75 sm:gap-1.25 md:gap-1.5 py-2 sm:py-2.5 md:py-3 px-2.5 sm:px-3.25 md:px-4 text-xs sm:text-sm md:text-base font-medium tracking-wide leading-none border rounded-full bg-white/50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-200">
                <FaStar className="size-2.5 sm:size-3 md:size-3.5 fill-yellow-400" />
                {formatRate(averageRating)}
            </span>
        </div>

    )
}