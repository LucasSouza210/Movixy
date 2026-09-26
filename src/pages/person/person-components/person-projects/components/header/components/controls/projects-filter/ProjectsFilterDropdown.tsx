import { AnimatePresence, motion } from "framer-motion";
import MediaTypeFilter from "./components/filters/MediaTypeFilter";
import MediaGenresFilter from "./components/filters/MediaGenresFilter";
import MediaRateFilter from "./components/filters/MediaRateFilter";
import FilterActions from "./components/filter-actions/FilterActions";

export default function ProjectsFilterDropdown({ open, close }: { open: boolean, close: () => void }) {
    return (
        <AnimatePresence>
            {
                open &&
                <motion.div className="min-w-46 sm:min-w-51 md:min-w-56 lg:min-w-42 xl:min-w-48 2xl:min-w-54 flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 2xl:gap-7 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 absolute z-40 top-10 sm:top-12 md:top-14 lg:top-8 xl:top-9.5 2xl:top-11 -right-2 sm:-right-2.5 md:-right-3 border rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl bg-default border-default" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
                    <MediaTypeFilter />
                    <MediaGenresFilter close={close} />
                    <MediaRateFilter />
                    <FilterActions close={close} />
                </motion.div>
            }
        </AnimatePresence>
    )
}