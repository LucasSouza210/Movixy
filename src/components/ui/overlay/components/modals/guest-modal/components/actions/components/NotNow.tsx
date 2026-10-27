import useOverlay from "../../../../../../../../../hooks/useOverlay"
import GuestButton from "../../../../../../../buttons/GuestButton"

export default function NotNow() {

    const { closeOverlay } = useOverlay()

    return (
        <GuestButton label="notNow" variant="ghost" onClick={() => closeOverlay()} />
    )
}