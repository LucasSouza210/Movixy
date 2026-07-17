import SearchCard from "../../../../../components/ui/cards/search-card/SearchCard";
import type { SearchContent } from "../../../../../types/tmdb";

export default function SearchSuggestionsList({ list }: { list: SearchContent[] | null }) {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
            {
                (list ?? Array.from({ length: 4 })).map((i, index) => {
                    return (
                        list ? <SearchCard content={i} key={index} />
                            :
                            <span className="w-full h-24 sm:h-30 md:h-36 lg:h-24 xl:h-30 2xl:h-36 rounded-[20px] sm:rounded-3xl md:rounded-[28px] lg:rounded-[20px] xl:rounded-3xl 2xl:rounded-[28px] skeleton" key={index} />
                    )
                })
            }
        </div>
    )
}