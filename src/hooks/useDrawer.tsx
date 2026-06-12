import Drawer from "../components/ui/Drawer"
import useOverlay from "./useOverlay"

export default function useDrawer() {

    const { openOverlay, closeOverlay } = useOverlay()

    const openDrawer = (component: React.ReactNode) => {
        openOverlay(<Drawer>{component}</Drawer>, { bottom: true })
    }

    const closeDrawer = () => {
        closeOverlay()
    }

    return {
        openDrawer,
        closeDrawer
    }
}