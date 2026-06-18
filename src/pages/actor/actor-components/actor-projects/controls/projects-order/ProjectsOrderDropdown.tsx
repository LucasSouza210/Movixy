import { useContext } from "react";
import { Contexts } from "../../../../../../contexts/ContextsProvider";
import { AnimatePresence, motion } from "framer-motion";
import { sortOptions } from "../../../../../../utils/constants";
import SortOption from "./SortOption";

export default function ProjectsOrderDropdown({ open, close }: { open: boolean, close: () => void }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 absolute z-40 top-10 sm:top-12 md:top-14 -right-2 sm:-right-2.5 md:-right-3 border rounded-3xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
                    {
                        sortOptions.map((i, index) => (
                            <SortOption title={i.title[lang]} value={i.value as 'newest' | 'oldest' | 'highest_rated' | 'lowest_rated'} close={close} key={index} />
                        ))
                    }
                </motion.div>
            }
        </AnimatePresence>
    )
}