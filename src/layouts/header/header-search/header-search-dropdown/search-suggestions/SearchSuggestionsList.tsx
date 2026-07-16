import type { Media, Person } from "../../../../../types/tmdb";

export default function SearchSuggestionsList({ list }: { list: (Media | Person)[] | null }) {
    return (
        <div className="w-full flex flex-col gap-3">
            {
                (list ?? Array.from({ length: 6 })).map((i, index) => {
                    return (
                        <span className="w-full aspect-24/8 rounded-2xl skeleton" key={index}>

                        </span>
                    )
                })
            }
        </div>
    )
}