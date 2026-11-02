import Title from "./components/Title"
import Redirect from "./components/Redirect"
import LoginPanel from "./components/panels/login-panel/LoginPanel"
import RegisterPanel from "./components/panels/register-panel/RegisterPanel"

export default function AuthFormContainer({ formType, onRedirect }: { formType: 'login' | 'register', onRedirect: () => void }) {
    return (
        <div className="w-full sm:w-88 md:w-96 lg:w-70 xl:w-76 2xl:w-82 h-fit flex flex-col items-center justify-between gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 border rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-[28px] xl:rounded-4xl 2xl:rounded-[36px] bg-default border-default">
            <Title />
            <div className="w-full flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7">
                {
                    formType == 'login' ?
                        <LoginPanel />
                        :
                        <RegisterPanel />
                }
                <Redirect type={formType} redirect={() => onRedirect()} />
            </div>
        </div>
    )
}