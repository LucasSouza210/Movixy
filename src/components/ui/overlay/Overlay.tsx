import { useContext } from "react"
import { Contexts } from "../../../contexts/ContextsProvider"
import { AnimatePresence, motion } from "framer-motion"

export default function Overlay() {

    const contexts = useContext(Contexts)

    const { overlay, setOverlay } = contexts!

    return (
        <AnimatePresence>
            {overlay && (
                <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: "easeIn" }} className={`${overlay.self ? 'justify-end' : 'justify-center'} ${overlay.bottom ? 'items-end lg:items-center' : 'items-center'} flex fixed inset-0 z-40 backdrop-blur-[2px] bg-zinc-950/50 overflow-hidden`} onClick={() => setOverlay(null)}>
                    <motion.div className={`${overlay.center && 'w-full sm:w-fit flex justify-center items-stretch px-8 sm:px-0'} ${overlay.bottom && "w-full sm:w-fit"}`} initial={overlay.bottom || overlay.center ? { y: "100%" } : { x: "100%" }} animate={overlay.bottom || overlay.center ? { y: 0 } : { x: 0 }} exit={overlay.bottom || overlay.center ? { y: "100%" } : { x: "100%" }} transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }} drag={overlay.bottom ? "y" : false} dragConstraints={{ top: 0, bottom: 300 }} dragElastic={{ top: 0, bottom: 0.15 }} onDragEnd={(_, info) => { if (overlay.bottom && (info.offset.y > 80 || info.velocity.y > 400)) { setOverlay(null) } }} onClick={(e) => e.stopPropagation()} style={{ willChange: "transform" }}>
                        {overlay.component}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}