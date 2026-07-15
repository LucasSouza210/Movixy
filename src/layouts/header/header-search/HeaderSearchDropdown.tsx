import { AnimatePresence, motion } from "framer-motion"

export default function HeaderSearchDropdown({ open }: { open: boolean }) {
    return (
        <AnimatePresence>
            {
                open &&
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 }} className={`min-w-max w-full sm:w-3/4 lg:w-3/6 2xl:w-2/5 aspect-video flex border border-default rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl absolute z-40 top-10.5 sm:top-11.25 md:top-12 lg:top-9.25 xl:top-11 2xl:top-12.75 overflow-hidden bg-zinc-100 dark:bg-zinc-950`}>
                    <span className="size-full bg-white/55 dark:bg-black/15"> {/*only to mix colors*/}
                        <div className="size-full bg-zinc-100/40 dark:bg-zinc-900/40">

                        </div>
                    </span>
                </motion.div>
            }
        </AnimatePresence>
    )
}