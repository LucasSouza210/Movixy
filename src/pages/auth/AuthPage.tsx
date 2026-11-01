import { useSearchParams } from "react-router-dom";
import PageContainer from "../../components/ui/PageContainer";
import AuthFormContainer from "./auth-components/auth-form-container/AuthFormContainer";

export default function AuthPage() {

    const [searchParams, setSearchParams] = useSearchParams()

    const formType = searchParams.get('mode') === 'register' ? 'register' : 'login'

    const handleRedirect = () => {
        setSearchParams({ mode: formType === 'login' ? 'register' : 'login' }, { replace: true })
    }

    return (
        <PageContainer center>
            <AuthFormContainer formType={formType} onRedirect={handleRedirect} />
        </PageContainer>
    )
}