import { useAuth } from "./useAuth"
import useOverlay from "./useOverlay"
import GuestModal, { type GuestAction } from "../components/ui/overlay/components/modals/guest-modal/GuestModal"

export default function useRequireLogin() {

    const { user, authInitializing } = useAuth()

    const { openOverlay } = useOverlay()

    const requireLogin = (action: GuestAction) => {

        if (authInitializing) return false

        if (user) return true

        openOverlay(<GuestModal action={action} />, { center: true })

        return false
    }

    return { requireLogin }
}