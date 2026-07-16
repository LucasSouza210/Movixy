import { AnimatePresence, motion } from "framer-motion"
import SearchSuggestions from "./search-suggestions/SearchSuggestions"

export default function HeaderSearchDropdown({ open }: { open: boolean }) {
    return (
        <AnimatePresence>
            {
                open &&
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className={`min-w-max w-6/5 sm:w-3/4 lg:w-3/6 2xl:w-2/5 flex border border-default rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl absolute z-40 top-9/10 overflow-hidden bg-zinc-100 dark:bg-zinc-950`}>
                    <span className="size-full bg-white/55 dark:bg-black/15"> {/*only to mix colors*/}
                        <div className="size-full flex p-6 bg-zinc-100/40 dark:bg-zinc-900/40">
                            <SearchSuggestions />
                        </div>
                    </span>
                </motion.div>
            }
        </AnimatePresence>
    )
}