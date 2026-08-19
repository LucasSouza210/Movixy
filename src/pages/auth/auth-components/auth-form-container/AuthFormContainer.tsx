import { useState } from "react"
import AuthFormTitle from "./components/AuthFormTitle"
import AuthRedirect from "./components/AuthRedirect"
import LoginPanel from "../login-panel/LoginPanel"
import RegisterPanel from "../register-panel/RegisterPanel"

export default function AuthFormContainer() {
    const [formType, setFormType] = useState<'login' | 'create'>('login')

    const handleRedirect = () => {
        setFormType(formType == 'login' ? 'create' : 'login')
    }

    return (
        <div className="w-full sm:w-fit h-fit flex flex-col items-center justify-between gap-7 sm:gap-8 md:gap-9 lg:gap-6 xl:gap-7 2xl:gap-8 p-7 sm:p-8 md:p-9 lg:p-6 xl:p-7 2xl:p-8 border rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-[28px] xl:rounded-4xl 2xl:rounded-[36px] bg-default border-default">
            <AuthFormTitle />
            {
                formType == 'login' ?
                    <LoginPanel />
                    :
                    <RegisterPanel />
            }
            <AuthRedirect type={formType} redirect={() => handleRedirect()} />
        </div>
    )
}