import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"

export default function AppOverlay() {

    const contexts = useContext(Contexts)

    const { overlay, setOverlay } = contexts!

    return (
        <div className="flex items-center justify-center absolute inset-0 overflow-hidden z-30 bg-zinc-950/50 dark:bg-zinc-950/60" onClick={() => setOverlay(false)}>
            {
                overlay &&
                <div onClick={(e) => e.stopPropagation()}>
                    {
                        overlay
                    }
                </div>
            }
        </div>
    )
}