import type { Director } from "../../../../../../../../types/tmdb";
import BirthPlace from "./components/BirthPlace";
import Name from "./components/Name";

export default function Info({ director, compact }: { director: Director, compact?: boolean }) {
    return (
        <div className={`flex flex-col items-start ${compact ? 'gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 pt-1.75 sm:pt-2.25 md:pt-2.75 lg:pt-1.25 xl:pt-1.75 2xl:pt-2.25' : 'gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 pt-2 sm:pt-2.5 md:pt-3 lg:pt-1.75 xl:pt-2.25 2xl:pt-2.75'}`}>
            <Name name={director.name} compact={compact} />
            <BirthPlace place={director.place_of_birth} compact={compact} />
        </div>
    )
}