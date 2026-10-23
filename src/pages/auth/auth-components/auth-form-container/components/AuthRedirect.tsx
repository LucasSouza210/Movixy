import { useTranslate } from "../../../../../translations/Translations"

export default function AuthRedirect({ type, redirect }: { type: 'login' | 'register', redirect: () => void }) {

    const { line } = useTranslate()

    const register = type == 'register'

    const ask = line(register ? 'hasAccountText' : 'noAccountText')
    const redirectLabel = line(register ? 'signInLink' : 'signUpLink')

    return (
        <p className="text-center text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-5 xl:leading-5.5 2xl:leading-6 text-zinc-400">
            {ask} <button className="hover:underline underline-offset-5 sm:underline-offset-6 md:underline-offset-7 lg:underline-offset-4 xl:underline-offset-5 2xl:underline-offset-6 decoration-1 text-action-secondary" aria-label={line(register ? 'ariaSwitchToLogin' : 'ariaSwitchToRegister')} onClick={redirect}>
                {redirectLabel}
            </button>
        </p>
    )
}