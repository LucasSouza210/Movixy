import { useParams } from "react-router-dom"
import UserRatingSkeleton from "./UserRatingSkeleton"
import RatingPanel from "../../../../../../components/ui/shared/rating-panel/RatingPanel"

export default function UserRating({ loading }: { loading: boolean }) {

    const { id, mediaType } = useParams()

    const validMediaType = mediaType === "movie" || mediaType === "tv"


    return (
        loading ? <UserRatingSkeleton />
            :
            <RatingPanel target={{ id: Number(id), mediaType: validMediaType ? mediaType : undefined }} theme="card" />
    )
}