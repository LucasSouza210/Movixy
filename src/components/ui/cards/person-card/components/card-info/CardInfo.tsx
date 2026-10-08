import { useMemo } from "react";
import type { PersonCardData } from "../../../../../../types/tmdb";
import filterCredits from "../../../../../../utils/tmdb/filterCredits";
import Name from "./components/Name";
import Meta from "./components/Meta";

export default function CardInfo({ person, role }: { person: PersonCardData, role?: string }) {

    const credits = useMemo(() => {
        if (!person.credits) return []
        return filterCredits(person.credits)
    }, [person]).length

    return (
        <div className="flex flex-col items-center gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
            <Name name={person.name} />
            <Meta credits={credits} role={role} />
        </div>
    )
}