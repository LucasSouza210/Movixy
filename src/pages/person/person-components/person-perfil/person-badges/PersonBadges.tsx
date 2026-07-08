import type { PersonCredits } from "../../../../../types/tmdb";
import formatRate from "../../../../../utils/tmdb/formatRate";
import PersonBadgesSkeleton from "./PersonBadgesSkeleton";
import PersonLikeButton from "./PersonLikeButton";
import { LuClapperboard } from "react-icons/lu";
import { FaStar } from "react-icons/fa"

export default function PersonBadges({ list, loading }: { list: PersonCredits["cast"], loading: boolean }) {


    const relevantCredits = list.filter(credit => (credit.vote_count ?? 0) >= 100)

    const averageRating = relevantCredits.reduce((acc, item) => acc + (item.vote_average ?? 0) * (item.vote_count ?? 0), 0) / relevantCredits.reduce((acc, item) => acc + (item.vote_count || 0), 0)

    return (
        loading ? <PersonBadgesSkeleton />
            :
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
                <PersonLikeButton />
                <span className="w-fit h-7 sm:h-8.5 md:h-10 lg:h-7 xl:h-8 2xl:h-9 flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2.5 sm:px-3.25 md:px-4 lg:px-2.5 xl:px-3.25 2xl:px-4 text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide leading-none border rounded-full bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-200">
                    <LuClapperboard className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-3 2xl:size-3.5" />
                    {
                        list.length ?? 'N/A'
                    }
                </span>
                <span className="w-fit h-7 sm:h-8.5 md:h-10 lg:h-7 xl:h-8 2xl:h-9 flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2.5 sm:px-3.25 md:px-4 lg:px-2.5 xl:px-3.25 2xl:px-4 text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide leading-none border rounded-full bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-200">
                    <FaStar className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-3 2xl:size-3.5 fill-yellow-400" />
                    {
                        averageRating ? formatRate(averageRating) : 'N/A'
                    }
                </span>
            </div>
    )
}