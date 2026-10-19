import { useTranslate } from "../../../../../../../../../../translations/Translations"
import { FiEdit2 } from "react-icons/fi";
import DropdownButton from "../../../../../../../../../../components/ui/buttons/DropdownButton";

export default function EditProfile() {

    const { line } = useTranslate()

    const handleClick = () => {

    }

    return (
        <DropdownButton onClick={() => handleClick()}>
            {
                line('editProfile')
            }
            <FiEdit2 />
        </DropdownButton>
    )
}