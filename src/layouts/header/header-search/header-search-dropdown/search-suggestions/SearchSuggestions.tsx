import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../translations/Translations"
import useLang from "../../../../../hooks/useLang";
import { getTrendingSuggestions } from "../../../../../services/tmdb/tmdb.services";
import type { SearchContent } from "../../../../../types/tmdb";
import { LuTrendingUp } from "react-icons/lu";
import SearchSuggestionsList from "./SearchSuggestionsList";

export default function SearchSuggestions() {

    const { line } = useTranslate()
    const lang = useLang()

    const [list, setList] = useState<SearchContent[] | null>(null)

    useEffect(() => {
        async function load() {
            const suggestions = await getTrendingSuggestions(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setList(suggestions)
        }

        load()
    }, [lang])

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6">
            <p className="flex items-center gap-1.5 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider leading-none text-black dark:text-white">
                {line('trendingTitle')}
                <LuTrendingUp />
            </p>
            <SearchSuggestionsList list={list} />
        </div>
    )
}