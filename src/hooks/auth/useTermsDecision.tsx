import { useLocation, useNavigate } from "react-router-dom"
import { setAuthDraftTerms } from "../../utils/auth/authDraft"

export default function useTermsDecision() {

    const navigate = useNavigate()

    const location = useLocation()

    const cameFromAuth = location.state?.fromAuth === true

    const canGoBack = location.key !== "default"

    const decide = (accepted: boolean) => {

        if (cameFromAuth) {
            setAuthDraftTerms(accepted)
            navigate('/auth?mode=register', { replace: true })
            return
        }

        if (canGoBack) {
            navigate(-1)
        } else {
            navigate("/")
        }
    }

    return {
        accept: () => decide(true),
        decline: () => decide(false),
    }
}