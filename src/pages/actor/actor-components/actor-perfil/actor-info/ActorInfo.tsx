import type { ActorDetails } from "../../../../../types/tmdb";
import ActorBadges from "../actor-badges/ActorBadges";
import ActorBirthPlace from "./ActorBirthPlace";
import ActorVitalInfo from "./ActorVitalInfo";

export default function ActorInfo({ actor }: { actor: ActorDetails }) {

    return (
        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 pt-4 sm:pt-5 md:pt-6 lg:pt-0">
            <p className="block lg:hidden text-base sm:text-lg md:text-xl lg:text-lg font-semibold tracking-wider leading-6 text-black dark:text-white">{actor.name}</p>
            <div className="flex flex-col lg:items-start gap-3 sm:gap-4 md:gap-5">
                <div className="lg:w-full flex flex-col lg:flex-row-reverse lg:justify-between gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-0">
                    <ActorVitalInfo birthday={actor.birthday} deathday={actor.deathday} />
                    <ActorBirthPlace place={actor.place_of_birth} />
                </div>
                <div className="block lg:hidden">
                    <ActorBadges list={actor.combined_credits.cast} />
                </div>
            </div>
        </div>
    )
}