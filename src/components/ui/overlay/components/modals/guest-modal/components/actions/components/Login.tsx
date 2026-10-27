import { useNavigate } from "react-router-dom";
import GuestButton from "../../../../../../../buttons/GuestButton";

export default function Login() {

    const navigate = useNavigate()

    return (
        <GuestButton label="signIn" variant="default" onClick={() => navigate('/auth')} />
    )
}