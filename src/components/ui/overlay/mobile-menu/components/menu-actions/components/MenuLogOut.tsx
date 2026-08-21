import { useContext } from "react";
import { Contexts } from "../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
import { useAuth } from "../../../../../../../hooks/useAuth";
import { RxExit } from "react-icons/rx";

export default function MenuLogOut() {

    const contexts = useContext(Contexts)

    const { setOverlay } = contexts!

    const { line } = useTranslate()

    const { logout } = useAuth()

    const handleLogout = () => {
        setOverlay(null)
        logout()
    }

    return (
        <button className="w-fit h-12 sm:h-13 md:h-14 flex items-center justify-start gap-2 sm:gap-2.5 md:gap-3 px-4 sm:px-5 md:px-6 rounded-[10px] sm:rounded-xl md:rounded-[14px] border border-default transition-all ease-in-out duration-200 cursor-pointer bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100" onClick={() => handleLogout()}>
            <p className="text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none">{line('signOut')}</p>
            <RxExit className="size-3.5 sm:size-4 md:size-4.5" />
        </button>
    )
}