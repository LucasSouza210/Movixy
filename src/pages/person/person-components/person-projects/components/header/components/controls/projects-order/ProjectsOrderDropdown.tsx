import { AnimatePresence, motion } from "framer-motion";
import { sortOptions } from "../../../../../../../../../utils/constants";
import SortOption from "./SortOption";
import useLang from "../../../../../../../../../hooks/useLang";

export default function ProjectsOrderDropdown({ open, close }: { open: boolean, close: () => void }) {

    const lang = useLang()

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4 p-4 sm:p-5 md:p-6 lg:p-3 xl:p-4 2xl:p-5 absolute z-40 top-10 sm:top-12 md:top-14 lg:top-8 xl:top-9.5 2xl:top-11 -right-6 sm:-right-7 md:-right-8 lg:-right-6 xl:-right-7 2xl:-right-8 border rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl bg-default border-default" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
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