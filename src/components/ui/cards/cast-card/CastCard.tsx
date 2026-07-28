import { Link } from "react-router-dom";
import type { CastMember } from "../../../../types/tmdb";
import CastCardAvatar from "./components/CastCardAvatar";
import CastCardInfo from "./components/CastCardInfo";

export default function CastCard({ actor }: { actor: CastMember }) {
    return (
        <Link className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4" to={`/person/${actor.id}`}>
            <CastCardAvatar path={actor.profile_path} name={actor.name} />
            <CastCardInfo name={actor.name} character={actor.character} />
        </Link>
    )
}