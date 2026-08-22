import { AnimatePresence, motion } from "framer-motion";
import { sortOptions } from "../../../../../../../utils/constants";
import SortOption from "./SortOption";
import useLang from "../../../../../../../hooks/useLang";

export default function ProjectsOrderDropdown({ open, close }: { open: boolean, close: () => void }) {

    const lang = useLang()

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-6 absolute z-40 top-10 sm:top-12 md:top-14 lg:top-9 xl:top-10.5 2xl:top-12 -right-6 sm:-right-7 md:-right-8 lg:-right-6 xl:-right-7 2xl:-right-8 border rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
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