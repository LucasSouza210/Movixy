import { useNavigate } from "react-router-dom";
import type { PersonCardInfo} from "../../../../types/tmdb";
import PersonCardDetails from "./components/PersonCardDetails";
import PersonCardAvatar from "./components/PersonCardAvatar";
import PersonCardLikeButton from "./components/PersonCardLikeButton";

export default function PersonCard({ actor }: { actor: PersonCardInfo }) {

    const navigate = useNavigate()

    return (
        <div className="shrink-0 flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 cursor-pointer" onClick={() => navigate(`/person/${actor.id}`)}>
            <div className="w-full aspect-square rounded-full relative">
                <PersonCardAvatar path={actor.profile_path} name={actor.name} />
                <PersonCardLikeButton />
            </div>
            <PersonCardDetails actor={actor} />
        </div>
    )
}