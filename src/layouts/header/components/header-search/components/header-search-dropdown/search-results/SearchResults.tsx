import { useTranslate } from "../../../../../../../translations/Translations"
import type { SearchContent } from "../../../../../../../types/tmdb"
import { LuListFilter } from "react-icons/lu";
import SearchList from "../SearchList"
import NoResults from "./no-results/NoResults";

export default function SearchResults({ list }: { list: SearchContent[] }) {

    const { line } = useTranslate()

    return (
        <div className="size-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider leading-none text-black dark:text-white">
                {line('searchResultsTitle')}
                <LuListFilter className="size-3.5 sm:size-4 md:size-4.5 lg:size-3.5 xl:size-4 2xl:size-4.5" />
            </p>
            <div className="flex-1 min-h-0 flex">
                {
                    list.length === 0 ?
                        <NoResults />
                        :
                        <SearchList list={list} />
                }
            </div>
        </div>
    )
}