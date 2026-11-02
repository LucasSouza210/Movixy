import type { PersonCredits } from "../../../../../../types/tmdb";
import { LuClapperboard } from "react-icons/lu";
import { FaStar } from "react-icons/fa"
import formatRate from "../../../../../../utils/formatters/formatRate";
import MetaSkeleton from "./MetaSkeleton";
import Like from "./components/Like";
import Badge from "./components/Badge";

export default function Meta({ list, mobile, loading }: { list: PersonCredits["cast"], mobile?: boolean, loading: boolean }) {

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
        loading ? <MetaSkeleton />
            :
            <div className={`items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
                <Like />
                {
                    info.map((i, index) => (
                        <Badge text={i.text} icon={i.icon} rating={i.rating} key={index} />
                    ))
                }
            </div>
    )
}