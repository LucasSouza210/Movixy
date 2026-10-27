import { useNavigate } from "react-router-dom";
import GuestButton from "../../../../../../../buttons/GuestButton";

export default function CreateAccount() {

    const navigate = useNavigate()

    return (
        <GuestButton label="createAccount" variant="default" onClick={() => navigate('/auth?mode=register')} />
    )
}