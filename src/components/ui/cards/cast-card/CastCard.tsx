import { Link } from "react-router-dom";
import type { CastMember } from "../../../../types/tmdb";
import MemberAvatar from "./MemberAvatar";

export default function CastCard({ actor }: { actor: CastMember }) {
    return (
        <Link className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4" to={`/person/${actor.id}`}>
            <MemberAvatar path={actor.profile_path} name={actor.name}/>
            <div className="flex flex-col items-center gap-px lg:gap-0.5 xl:gap-0.75">
                <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-4.5 sm:leading-5.25 md:leading-6 lg:leading-4.5 xl:leading-5 2xl:leading-6 text-zinc-900 dark:text-zinc-100">{actor.name}</p>
                <p className="text-center font-medium text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-4 sm:leading-5 md:leading-6 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 text-zinc-600 dark:text-zinc-300">{actor.character}</p>
            </div>
        </Link>
    )
}