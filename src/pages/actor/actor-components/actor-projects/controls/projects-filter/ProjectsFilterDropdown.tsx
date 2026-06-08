import { AnimatePresence, motion } from "framer-motion";
import MediaGenresFilter from "./filters/MediaGenresFilter";

export default function ProjectsFilterDropdown({ open, close }: { open: boolean, close: () => void }) {


    return (
        <AnimatePresence>
            {
                open &&
                <motion.div className="min-w-40 flex flex-col gap-2 p-6 absolute z-40 top-10 right-0 border rounded-3xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }}>
                    <MediaGenresFilter />
                </motion.div>
            }
        </AnimatePresence>
    )
}