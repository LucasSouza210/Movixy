import type { Person } from "../../../../../../types/tmdb";

export default function HighlightInfo({ person }: { person: Person | null }) {
    return (
        <div className="flex">
            <p className="text-sm font-medium tracking-wider leading-5.5 text-black dark:text-white">{person?.name}</p>
        </div>
    )
}