import { useNavigate } from "react-router-dom";
import type { PersonDetails } from "../../../../types/tmdb";
import ActorDetails from "./ActorDetails";
import ActorCardAvatar from "./ActorCardAvatar";
import ActorCardLikeButton from "./ActorCardLikeButton";

export default function ActorCard({ actor }: { actor: PersonDetails }) {

    const navigate = useNavigate()

    return (
        <div className="shrink-0 flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 cursor-pointer" onClick={() => navigate(`/person/${actor.id}`)}>
            <div className="w-full aspect-square rounded-full relative">
                <ActorCardAvatar path={actor.profile_path} name={actor.name} />
                <ActorCardLikeButton />
            </div>
            <ActorDetails actor={actor} />
        </div>
    )
}