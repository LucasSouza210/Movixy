import type { PersonCredit, PersonDetails } from "../../../../../types/tmdb";
import PersonBadges from "../person-badges/PersonBadges";
import PersonName from "./components/PersonName";
import PersonBirthPlace from "./components/PersonBirthPlace";
import PersonVitalInfo from "./components/PersonVitalInfo";

export default function PersonInfo({ person, credits, loading }: { person: PersonDetails | null, credits: PersonCredit[], loading: boolean }) {
    return (
        <div className="flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-0 pt-4 sm:pt-5 md:pt-6 lg:pt-0">
            <PersonName name={person?.name} mobile loading={loading} />
            <div className="flex flex-col lg:items-start gap-3 sm:gap-4 md:gap-5">
                <div className="lg:w-full flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-0">
                    <PersonVitalInfo birthday={person?.birthday} deathday={person?.deathday} loading={loading} />
                    <PersonBirthPlace place={person?.place_of_birth} loading={loading} />
                </div>
                <div className="block lg:hidden">
                    <PersonBadges list={credits} loading={loading} />
                </div>
            </div>
        </div>
    )
}