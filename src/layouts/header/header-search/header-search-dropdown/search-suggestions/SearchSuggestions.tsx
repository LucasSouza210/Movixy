import { useEffect, useState } from "react";
import { useTranslate } from "../../../../../translations/Translations"
import useLang from "../../../../../hooks/useLang";
import { getTrendingSuggestions } from "../../../../../services/tmdb/tmdb.services";
import type { SearchContent } from "../../../../../types/tmdb";
import { LuTrendingUp } from "react-icons/lu";
import SearchList from "../SearchList";

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
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider leading-none text-black dark:text-white">
                {line('trendingTitle')}
                <LuTrendingUp className="size-3.5 sm:size-4 md:size-4.5 lg:size-3.5 xl:size-4 2xl:size-4.5"/>
            </p>
            <SearchList list={list} />
        </div>
    )
}