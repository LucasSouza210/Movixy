import { useNavigate } from "react-router-dom";
import type { Actor } from "../../../../types/tmdb";
import ActorDetails from "./ActorDetails";
import ActorCardAvatar from "./ActorCardAvatar";
import ActorCardLikeButton from "./ActorCardLikeButton";

export default function ActorCard({ actor }: { actor: Actor }) {

    const navigate = useNavigate()

    return (
        <div className="shrink-0 flex flex-col items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 cursor-pointer" onClick={() => navigate(`/actor/${actor.id}`)}>
            <div className="w-full aspect-square rounded-full relative">
                <ActorCardAvatar path={actor.profile_path} name={actor.name} />
                <ActorCardLikeButton />
            </div>
            <ActorDetails actor={actor} />
        </div>
    )
}