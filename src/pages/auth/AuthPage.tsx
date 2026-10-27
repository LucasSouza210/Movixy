import { useSearchParams } from "react-router-dom";
import PageContainer from "../../components/ui/PageContainer";
import AuthFormContainer from "./auth-components/auth-form-container/AuthFormContainer";

export default function AuthPage() {

    const [searchParams] = useSearchParams()

    const initialType = searchParams.get('mode') === 'register' ? 'register' : 'login'

    return (
        <PageContainer center>
            <AuthFormContainer key={initialType} initialType={initialType} />
        </PageContainer>
    )
}