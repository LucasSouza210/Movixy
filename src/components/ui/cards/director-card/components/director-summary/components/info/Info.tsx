import type { Director } from "../../../../../../../../types/tmdb";
import BirthPlace from "./components/BirthPlace";
import Name from "./components/Name";

export default function Info({ director }: { director: Director }) {
    return (
        <div className="flex flex-col items-start gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 pt-2 sm:pt-2.5 md:pt-3 lg:pt-1.75 xl:pt-2.25 2xl:pt-2.75">
            <Name name={director.name} />
            <BirthPlace place={director.place_of_birth} />
        </div>
    )
}