import { useContext } from "react";
import { Contexts } from "../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
import { useAuth } from "../../../../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function MenuPerfilLink() {

    const contexts = useContext(Contexts)

    const { setOverlay } = contexts!

    const { line } = useTranslate()

    const { session } = useAuth()

    const handleClick = () => {
        setOverlay(null)
    }

    return (
        <Link to={session ? '/user' : '/auth'} className="h-12 sm:h-13 md:h-14 flex items-center justify-center gap-2 border rounded-[10px] sm:rounded-xl md:rounded-[14px] border-default transition-all ease-in-out duration-200 cursor-pointer bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100" onClick={() => handleClick()}>
            <p className="text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none">{line(session ? 'viewProfile' : 'signInLink')}</p>
            <FiArrowUpRight className="size-4 sm:size-4.5 md:size-5" />
        </Link>
    )
}