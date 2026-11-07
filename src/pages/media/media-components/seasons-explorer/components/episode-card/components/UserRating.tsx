import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ExplorerContexts } from "../../../../../../../contexts/SeasonExplorerProvider"
import RatingPanel from "../../../../../../../components/ui/shared/rating-panel/RatingPanel"

export default function UserRating() {

    const { id } = useParams()

    const { selectedSeason, selectedEp } = useContext(ExplorerContexts)!

    return <RatingPanel target={{ id: Number(id), season: selectedSeason, episode: selectedEp }} theme="overlay" />
}