import { useContext, type JSX } from "react"
import { Contexts } from "../contexts/ContextsProvider"

export default function useOverlay() {
    const contexts = useContext(Contexts)
    const { setOverlay } = contexts!

    function openOverlay(component: JSX.Element, options?: { self?: boolean , bottom?: boolean}) {
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