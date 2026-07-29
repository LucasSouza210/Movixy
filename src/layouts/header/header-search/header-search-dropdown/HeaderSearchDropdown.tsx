import { useContext, useEffect, useState } from "react"
import { HeaderSearchContexts } from "../../../../contexts/HeaderSearchProvider"
import { AnimatePresence, motion } from "framer-motion"
import type { SearchContent } from "../../../../types/tmdb"
import { searchMulti } from "../../../../services/tmdb/tmdb.services"
import useLang from "../../../../hooks/useLang"
import SearchSuggestions from "./search-suggestions/SearchSuggestions"
import SearchResults from "./search-results/SearchResults"
import DropdownLoading from "./DropdownLoading"

export default function HeaderSearchDropdown({ open }: { open: boolean }) {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { search, loading, setLoading } = projectsContexts!

    const lang = useLang()

    const [list, setList] = useState<SearchContent[]>([])

    useEffect(() => {

        const timeout = setTimeout(async () => {

            if (!search.trim()) {
                setList([])
                setLoading(false)
                return
            }

            setLoading(true)

            try {
                const results = await searchMulti(search, lang)
                setList(results)
            } finally {
                setLoading(false)
            }

        }, 300)

        return () => clearTimeout(timeout)

    }, [search, lang, setLoading])

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className={`w-6/5 sm:w-full flex border border-default rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl absolute z-40 top-9/10 overflow-hidden backdrop-blur-2xl bg-zinc-50 dark:bg-zinc-950`}>
                    <div className="w-full h-132 sm:h-156 md:h-180 lg:h-132 xl:h-156 2xl:h-180 flex p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8">
                        {
                            loading ?
                                <DropdownLoading />
                                :
                                search == '' ?
                                    <SearchSuggestions />
                                    :
                                    <SearchResults list={list} />
                        }
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}