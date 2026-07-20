import { useContext, useEffect, useState } from "react"
import { HeaderSearchContexts } from "../../../../../contexts/HeaderSearchProvider";
import { useTranslate } from "../../../../../translations/Translations"
import useLang from "../../../../../hooks/useLang"
import type { SearchContent } from "../../../../../types/tmdb"
import { searchMulti } from "../../../../../services/tmdb/tmdb.services";
import { LuListFilter } from "react-icons/lu";
import SearchList from "../SearchList"
import NoResults from "./NoResults";

export default function SearchResults() {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { search } = projectsContexts!

    const { line } = useTranslate()
    const lang = useLang()

    const [list, setList] = useState<SearchContent[] | null>(null)

    useEffect(() => {

        const timeout = setTimeout(async () => {

            if (!search.trim()) {
                setList(null)
                return
            }

            const results = await searchMulti(search, lang)

            setList(results)

        }, 300);

        return () => clearTimeout(timeout)

    }, [search, lang])

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider leading-none text-black dark:text-white">
                {line('searchResultsTitle')}
                <LuListFilter className="size-3.5 sm:size-4 md:size-4.5 lg:size-3.5 xl:size-4 2xl:size-4.5" />
            </p>
            <div className="w-full h-108 sm:h-134 md:h-160 lg:h-108 xl:h-134 2xl:h-160 flex">
                {
                    (!list || list.length == 0) ?
                        <NoResults />
                        :
                        <SearchList list={list} />
                }
            </div>
        </div>
    )
}