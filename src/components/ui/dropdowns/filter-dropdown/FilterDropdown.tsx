import { useContext } from "react";
import { ProjectsContexts } from "../../../../contexts/ProjectsProvider";
import { AnimatePresence, motion } from "framer-motion";
import Filters from "./components/filters/Filters";
import CleanFilters from "./components/CleanFilters";
import FilterActions from "./components/filter-actions/FilterActions";

export default function FilterDropdown({ isOpen, open, close }: { isOpen: boolean, open: () => void, close: () => void }) {

    const projectsContexts = useContext(ProjectsContexts)

    const { projectFilters } = projectsContexts!

    const hasActiveFilters = projectFilters.type !== "all" || projectFilters.genres.length > 0 || projectFilters.rate.min !== null || projectFilters.rate.max !== null

    return (
        <AnimatePresence>
            {
                isOpen &&
                <motion.div className="min-w-46 sm:min-w-51 md:min-w-56 lg:min-w-42 xl:min-w-48 2xl:min-w-54 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-3 xl:gap-4 2xl:gap-5 p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 absolute z-40 top-10 sm:top-12 md:top-14 lg:top-8 xl:top-9.5 2xl:top-11 -right-2 sm:-right-2.5 md:-right-3 border rounded-[20px] sm:rounded-[23px] md:rounded-[26px] lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl bg-default border-default" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
                    <div className="min-w-full flex flex-col gap-3 sm:gap-3.75 md:gap-4.5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
                        <Filters open={open} close={close} />
                        {
                            hasActiveFilters &&
                            <CleanFilters />
                        }
                    </div>
                    <FilterActions close={close} />
                </motion.div>
            }
        </AnimatePresence>
    )
}