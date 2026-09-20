import { useMemo } from "react";
import type { PersonCardInfo } from "../../../../../../types/tmdb";
import filterCredits from "../../../../../../utils/tmdb/filterCredits";
import Name from "./components/Name";
import Meta from "./components/Meta";

export default function CardInfo({ person, role }: { person: PersonCardInfo, role?: string }) {

    const credits = useMemo(() => {
        if (!person.credits) return []
        return filterCredits(person.credits)
    }, [person]).length

    return (
        <div className="flex flex-col items-center gap-0.75 sm:gap-1 md:gap-1.25 lg:gap-0.75 xl:gap-1 2xl:gap-1.25">
            <Name name={person.name} />
            <Meta credits={credits} role={role} />
        </div>
    )
}