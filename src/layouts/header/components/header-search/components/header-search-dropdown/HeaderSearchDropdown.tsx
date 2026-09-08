import { useContext, useEffect, useState } from "react"
import { HeaderSearchContexts } from "../../../../../../contexts/HeaderSearchProvider"
import { AnimatePresence, motion } from "framer-motion"
import type { SearchContent } from "../../../../../../types/tmdb"
import { searchMulti } from "../../../../../../services/tmdb/tmdb.services"
import useLang from "../../../../../../hooks/useLang"
import DropdownLoading from "./components/DropdownLoading"
import SearchList from "./components/SearchList"

export default function HeaderSearchDropdown({ open }: { open: boolean }) {

    const projectsContexts = useContext(HeaderSearchContexts)

    const { search, loading, setLoading } = projectsContexts!

    const lang = useLang()

    const [list, setList] = useState<SearchContent[]>([])

    const searching = search.trim() !== ''

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
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className={`w-6/5 sm:w-full flex border border-default rounded-[26px] sm:rounded-[29px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl absolute z-40 top-9/10 overflow-hidden backdrop-blur-2xl bg-zinc-100 dark:bg-zinc-950`}>
                    <div className="w-full h-140 sm:h-165 md:h-190 lg:h-136 xl:h-161 2xl:h-186 flex bg-white/55 dark:bg-black/55">
                        {
                            loading ?
                                <DropdownLoading />
                                :
                                <SearchList title={searching ? 'searchResultsTitle' : 'trendingTitle'} list={list} searching={searching} />
                        }
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}