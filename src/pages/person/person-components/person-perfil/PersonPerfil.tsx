import type { PersonCredit, PersonDetails } from "../../../../types/tmdb";
import PersonBadges from "./person-badges/PersonBadges";
import PersonInfo from "./person-info/PersonInfo";
import PersonAvatar from "./PersonAvatar";

export default function PersonPerfil({ person, credits }: { person: PersonDetails, credits: PersonCredit[] }) {
    return (
        <div className="w-full lg:w-2/5 flex lg:flex-col lg:items-center gap-6 sm:gap-6.5 md:gap-7 lg:gap-4">
            <PersonAvatar path={person.profile_path} name={person.name} />
            <div className="lg:hidden">
                <PersonInfo person={person} />
            </div>
            <div className="hidden lg:block">
                <PersonBadges list={credits} />
            </div>
        </div>
    )
}