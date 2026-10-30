import { useContext, type JSX } from "react"
import { Contexts } from "../../contexts/ContextsProvider"
import type { OverlayConfig } from "../../contexts/ContextsProvider"

export default function useOverlay() {
    
    const { setOverlay } = useContext(Contexts)!

    function openOverlay(component: JSX.Element, options?: Omit<OverlayConfig, 'component'>) {
        setOverlay({
            component,
            ...options
        })
    }

    function closeOverlay() {
        setOverlay(null)
    }

    return { openOverlay, closeOverlay }
}