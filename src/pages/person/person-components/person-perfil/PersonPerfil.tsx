import type { PersonCredit, PersonDetails } from "../../../../types/tmdb";
import PersonBadges from "./person-badges/PersonBadges";
import PersonInfo from "./person-info/PersonInfo";
import PersonAvatar from "./person-avatar/PersonAvatar";

export default function PersonPerfil({ person, credits, loading }: { person: PersonDetails | null, credits: PersonCredit[], loading: boolean }) {
    return (
        <div className="w-full lg:w-2/5 flex lg:flex-col lg:items-center gap-6 sm:gap-6.5 md:gap-7 lg:gap-4">
            <PersonAvatar path={person?.profile_path} name={person?.name} loading={loading} />
            <div className="lg:hidden">
                <PersonInfo person={person} credits={credits} loading={loading} />
            </div>
            <div className="hidden lg:block">
                <PersonBadges list={credits} loading={loading} />
            </div>
        </div>
    )
}