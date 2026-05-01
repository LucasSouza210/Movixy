import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"
import { AnimatePresence, motion } from "framer-motion"

export default function AppOverlay() {

    const contexts = useContext(Contexts)

    const { overlay, setOverlay } = contexts!

    return (
        <AnimatePresence mode="wait">
            {
                overlay && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className={`${overlay.self ? 'justify-end' : 'justify-center'} flex items-center fixed inset-0 overflow-hidden z-30 bg-zinc-950/50 dark:bg-zinc-950/60`} onClick={() => setOverlay(null)}>
                        <motion.div key="overlay-content" initial={{ x: overlay.self ? "100%" : 0 }} animate={{ x: 0 }} exit={{ x: overlay.self ? "100%" : 0 }} transition={{ type: "tween", ease: "easeOut", duration: 0.25 }} onClick={(e) => e.stopPropagation()}>
                            {
                                overlay.component
                            }
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}