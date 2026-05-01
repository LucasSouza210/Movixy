import { useContext, type JSX } from "react"
import { Contexts } from "../contexts/ContextsProvider"

export default function useOverlay() {
    const contexts = useContext(Contexts)
    const { setOverlay } = contexts!

    function openOverlay(component: JSX.Element, options?: { self?: boolean }) {
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