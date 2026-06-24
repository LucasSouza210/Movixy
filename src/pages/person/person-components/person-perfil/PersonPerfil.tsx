import type { PersonDetails } from "../../../../types/tmdb";
import PersonBadges from "./person-badges/PersonBadges";
import PersonInfo from "./person-info/PersonInfo";

export default function PersonPerfil({ person }: { person: PersonDetails }) {
    return (
        <div className="w-full lg:w-2/5 flex lg:flex-col lg:items-center gap-6 sm:gap-6.5 md:gap-7 lg:gap-4">
            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} loading="lazy" decoding="async" draggable={false} className="w-2/5 lg:w-full h-auto md:max-h-none object-cover border rounded-3xl sm:rounded-[27px] md:rounded-[30px] border-zinc-300 dark:border-zinc-800" />
            <div className="lg:hidden">
                <PersonInfo person={person} />
            </div>
            <div className="hidden lg:block">
                <PersonBadges list={person.combined_credits.cast} />
            </div>
        </div>
    )
}