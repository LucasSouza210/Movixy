import { useAuth } from "../../../../../../../../../../hooks/useAuth";
import { useTranslate } from "../../../../../../../../../../translations/Translations"
import { useNavigate } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import DropdownButton from "../../../../../../../../../../components/ui/buttons/DropdownButton";

export default function Auth() {

    const { session, logout } = useAuth()

    const { line } = useTranslate()

    const navigate = useNavigate()

    const Icon = session ? FiLogOut : FiLogIn

    const handleClick = () => {
        if (session) {
            logout()
        }
        else {
            navigate('/auth')
        }
    }

    return (
        <DropdownButton custom={`${session ? 'text-action-danger' : 'text-action-brand'}`} onClick={() => handleClick()} label={session ? 'ariaSignOut' : 'ariaSignIn'}>
            {
                line(session ? 'signOut' : 'signIn')
            }
            <Icon />
        </DropdownButton>
    )
}