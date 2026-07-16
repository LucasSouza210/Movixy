import SearchCard from "../../../../../components/ui/cards/search-card/SearchCard";
import type { SearchContent } from "../../../../../types/tmdb";

export default function SearchSuggestionsList({ list }: { list: SearchContent[] | null }) {
    return (
        <div className="w-full flex flex-col gap-3">
            {
                (list ?? Array.from({ length: 6 })).map((i, index) => {
                    return (
                        list ? <SearchCard content={i} key={index} />
                            :
                            <span className="w-full aspect-24/8 rounded-2xl skeleton" key={index} />
                    )
                })
            }
        </div>
    )
}