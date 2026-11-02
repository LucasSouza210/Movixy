import type { PersonCredit, PersonDetails } from "../../../../../../types/tmdb";
import Meta from "../meta/Meta";
import Name from "./components/Name";
import BirthPlace from "./components/BirthPlace";
import VitalInfo from "./components/VitalInfo";

export default function Info({ person, credits, mobile, loading }: { person: PersonDetails | null, credits: PersonCredit[], mobile?: boolean, loading: boolean }) {
    return (
        <div className={`flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-0 pt-4 sm:pt-5 md:pt-6 lg:pt-0 ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            <Name name={person?.name} mobile loading={loading} />
            <div className="flex flex-col lg:items-start gap-3 sm:gap-4 md:gap-5">
                <div className="lg:w-full flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-0">
                    <VitalInfo birthday={person?.birthday} deathday={person?.deathday} loading={loading} />
                    <BirthPlace place={person?.place_of_birth} loading={loading} />
                </div>
                <Meta list={credits} mobile loading={loading} />
            </div>
        </div>
    )
}