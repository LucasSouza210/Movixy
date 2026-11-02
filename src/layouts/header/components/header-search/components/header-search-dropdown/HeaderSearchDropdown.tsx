import { useContext, useEffect, useState } from "react"
import { HeaderSearchContexts } from "../../../../../../contexts/HeaderSearchProvider"
import { AnimatePresence, motion } from "framer-motion"
import type { Lang, SearchContent } from "../../../../../../types/tmdb"
import { searchMulti } from "../../../../../../services/tmdb/search"
import { getTrendingSuggestions } from "../../../../../../services/tmdb/media"
import useLang from "../../../../../../hooks/utils/useLang"
import DropdownLoading from "./components/DropdownLoading"
import SearchList from "./components/search-list/SearchList"

const minSearchLength = 2
const debounceDelay = 300

type Suggestions = {
    lang: Lang
    items: SearchContent[]
}

export default function HeaderSearchDropdown({ open }: { open: boolean }) {

    const { search, loading, setLoading } = useContext(HeaderSearchContexts)!

    const lang = useLang()

    const [list, setList] = useState<SearchContent[] | null>(null)
    const [suggestions, setSuggestions] = useState<Suggestions | null>(null)

    const trimmedSearch = search.trim()
    const searching = trimmedSearch.length >= minSearchLength

    const suggestionsLang = suggestions?.lang

    useEffect(() => {

        if (!searching) {
            setList(null)
            setLoading(false)
            return
        }

        let cancelled = false

        const timeout = setTimeout(async () => {

            setLoading(true)

            try {
                const results = await searchMulti(trimmedSearch, lang)
                if (!cancelled) setList(results)
            } catch (error) {
                console.error("Failed to search:", error)
                if (!cancelled) setList([])
            } finally {
                if (!cancelled) setLoading(false)
            }

        }, debounceDelay)

        return () => {
            cancelled = true
            clearTimeout(timeout)
        }

    }, [trimmedSearch, searching, lang, setLoading])

    useEffect(() => {

        if (!open || suggestionsLang === lang) return

        let cancelled = false

        async function loadSuggestions() {
            try {
                const items = await getTrendingSuggestions(lang)
                if (!cancelled) setSuggestions({ lang, items })
            } catch (error) {
                console.error("Failed to load suggestions:", error)
                if (!cancelled) setSuggestions({ lang, items: [] })
            }
        }

        loadSuggestions()

        return () => {
            cancelled = true
        }

    }, [open, lang, suggestionsLang])

    const displayList = searching ? list : (suggestions?.items ?? null)
    const firstLoading = searching && list === null
    const refreshing = searching && list !== null && loading

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className={`w-6/5 sm:w-full flex border border-default rounded-[26px] sm:rounded-[29px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl absolute z-40 top-9/10 overflow-hidden backdrop-blur-2xl bg-zinc-100 dark:bg-zinc-950`}>
                    <div className="w-full flex bg-white/55 dark:bg-black/55">
                        {
                            firstLoading ?
                                <DropdownLoading />
                                :
                                <SearchList title={searching ? 'searchResultsTitle' : 'trendingTitle'} list={displayList} searching={searching} refreshing={refreshing} />
                        }
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}