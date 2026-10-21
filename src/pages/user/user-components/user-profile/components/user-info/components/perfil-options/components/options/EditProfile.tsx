import { useTranslate } from "../../../../../../../../../../translations/Translations"
import { FiEdit2 } from "react-icons/fi";
import { useUserInfo } from "../../../../../../../../../../hooks/useUserInfo";
import useOverlay from "../../../../../../../../../../hooks/useOverlay";
import DropdownButton from "../../../../../../../../../../components/ui/buttons/DropdownButton";
import EditPerfilModal from "../../../../../../../../../../components/ui/overlay/components/modals/edit-perfil-modal/EditPerfilModal";

export default function EditProfile() {

    const { profile, loading } = useUserInfo()
    const { line } = useTranslate()
    const { openOverlay } = useOverlay()

    const handleOpen = () => {
        if (!profile || loading) return

        openOverlay(<EditPerfilModal profile={profile} onSaved={() => { }} />, { center: true })
    }

    return (
        <DropdownButton onClick={handleOpen}>
            {line("editProfile")}
            <FiEdit2 />
        </DropdownButton>
    )
}