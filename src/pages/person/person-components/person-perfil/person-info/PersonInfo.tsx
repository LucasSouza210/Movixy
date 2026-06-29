import type { PersonCredit, PersonDetails } from "../../../../../types/tmdb";
import PersonBadges from "../person-badges/PersonBadges";
import PersonBirthPlace from "./PersonBirthPlace";
import PersonVitalInfo from "./PersonVitalInfo";

export default function PersonInfo({ person, credits }: { person: PersonDetails, credits: PersonCredit[] }) {

    return (
        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 pt-4 sm:pt-5 md:pt-6 lg:pt-0">
            <p className="block lg:hidden text-base sm:text-lg md:text-xl lg:text-lg font-semibold tracking-wider leading-6 text-black dark:text-white">{person.name}</p>
            <div className="flex flex-col lg:items-start gap-3 sm:gap-4 md:gap-5">
                <div className="lg:w-full flex flex-col lg:flex-row-reverse lg:justify-between lg:items-start gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-0">
                    <PersonVitalInfo birthday={person.birthday} deathday={person.deathday} />
                    <PersonBirthPlace place={person.place_of_birth} />
                </div>
                <div className="block lg:hidden">
                    <PersonBadges list={credits} />
                </div>
            </div>
        </div>
    )
}