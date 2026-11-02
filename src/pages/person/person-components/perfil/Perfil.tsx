import type { PersonCredit, PersonDetails } from "../../../../types/tmdb";
import Avatar from "./components/Avatar";
import Info from "./components/info/Info";
import Meta from "./components/meta/Meta";

export default function Perfil({ person, credits, loading }: { person: PersonDetails | null, credits: PersonCredit[], loading: boolean }) {
    return (
        <div className="w-full lg:w-2/5 flex lg:flex-col lg:items-center gap-6 sm:gap-6.5 md:gap-7 lg:gap-4">
            <Avatar path={person?.profile_path} name={person?.name} loading={loading} />
            <Info person={person} credits={credits} mobile loading={loading} />
            <Meta list={credits} loading={loading} />
        </div>
    )
}