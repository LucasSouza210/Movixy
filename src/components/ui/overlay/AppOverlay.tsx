import { useContext } from "react"
import { Contexts } from "../../../contexts/ContextsProvider"
import { AnimatePresence, motion } from "framer-motion"

export default function AppOverlay() {

    const contexts = useContext(Contexts)

    const { overlay, setOverlay } = contexts!

    return (
        <AnimatePresence>
            {overlay && (
                <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: "easeIn" }} className={`fixed inset-0 z-30 bg-zinc-950/50 ${overlay.self ? 'justify-end' : 'justify-center'} flex items-center overflow-hidden`} onClick={() => setOverlay(null)}>
                    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }} onClick={(e) => e.stopPropagation()} style={{ willChange: "transform" }}>
                        {overlay.component}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}