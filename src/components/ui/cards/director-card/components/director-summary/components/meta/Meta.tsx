import type { Director } from "../../../../../../../../types/tmdb";
import { FaStar, FaVideo } from "react-icons/fa";
import formatRate from "../../../../../../../../utils/tmdb/formatRate";
import MetaBadge from "./components/MetaBadge";
import Like from "./components/Like";

export default function Meta({ director }: { director: Director }) {

    const totalVotes = director.movies.reduce((acc, item) => acc + (item.vote_count ?? 0), 0)

    const averageRating = totalVotes > 0 ? director.movies.reduce((acc, item) => acc + (item.vote_average ?? 0) * (item.vote_count ?? 0), 0) / totalVotes : null

    const data = [
        {
            info: director.movies.length ?? 'N/A',
            icon: FaVideo,
            rating: false
        },
        {
            info: averageRating ? formatRate(averageRating) : 'N/A',
            icon: FaStar,
            rating: true
        }
    ]

    return (
        <div className="w-full flex items-center justify-end gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.25 xl:gap-1.75 2xl:gap-2.25">
            {
                data.map((i, index) => (
                    <MetaBadge info={i.info} icon={i.icon} rating={i.rating} key={index} />
                ))
            }
            <Like directorId={director.id} />
        </div>
    )
}