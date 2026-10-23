import { useContext } from "react";
import { Contexts } from "../../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../../translations/Translations";
import { useAuth } from "../../../../../../../../hooks/useAuth";
import { RxExit } from "react-icons/rx";

export default function SignOut() {

    const contexts = useContext(Contexts)

    const { setOverlay } = contexts!

    const { line } = useTranslate()

    const { logout } = useAuth()

    const handleLogout = () => {
        setOverlay(null)
        logout()
    }

    return (
        <button className="w-fit h-12 sm:h-13 md:h-14 flex items-center justify-start gap-2 sm:gap-2.5 md:gap-3 px-4 sm:px-5 md:px-6 rounded-[10px] sm:rounded-xl md:rounded-[14px] border action-default border-action text-action" aria-label={line('ariaSignOut')} onClick={() => handleLogout()}>
            <p className="text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none">{line('signOut')}</p>
            <RxExit className="size-3.5 sm:size-4 md:size-4.5" />
        </button>
    )
}