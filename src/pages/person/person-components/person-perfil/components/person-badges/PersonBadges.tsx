import type { PersonCredits } from "../../../../../../types/tmdb";
import { LuClapperboard } from "react-icons/lu";
import { FaStar } from "react-icons/fa"
import formatRate from "../../../../../../utils/tmdb/formatRate";
import PersonBadgesSkeleton from "./PersonBadgesSkeleton";
import LikeButton from "./components/LikeButton";
import PersonBadge from "./components/PersonBadge";

export default function PersonBadges({ list, loading }: { list: PersonCredits["cast"], loading: boolean }) {

    const totalVotes = list.reduce((acc, item) => acc + (item.vote_count ?? 0), 0)

    const averageRating = totalVotes > 0 ? list.reduce((acc, item) => acc + (item.vote_average ?? 0) * (item.vote_count ?? 0), 0) / totalVotes : null

    const info = [
        {
            text: list.length ?? 'N/A',
            icon: LuClapperboard,
            rating: false
        },
        {
            text: averageRating ? formatRate(averageRating) : 'N/A',
            icon: FaStar,
            rating: true
        }
    ]

    return (
        loading ? <PersonBadgesSkeleton />
            :
            <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
                <LikeButton />
                {
                    info.map((i, index) => (
                        <PersonBadge text={i.text} icon={i.icon} rating={i.rating} key={index} />
                    ))
                }
            </div>
    )
}