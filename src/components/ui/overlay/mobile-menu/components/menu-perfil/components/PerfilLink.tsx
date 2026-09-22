import { useContext } from "react";
import { Contexts } from "../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../translations/Translations";
import { useAuth } from "../../../../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function PerfilLink() {

    const contexts = useContext(Contexts)

    const { setOverlay } = contexts!

    const { line } = useTranslate()

    const { session } = useAuth()

    const handleClick = () => {
        setOverlay(null)
    }

    return (
        <Link to={session ? '/user' : '/auth'} className="h-12 sm:h-13 md:h-14 flex items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 border rounded-[10px] sm:rounded-xl md:rounded-[14px] text-sm sm:text-[15px] md:text-base font-medium tracking-wider action-default border-action text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100" onClick={() => handleClick()}>
            {
                line(session ? 'viewProfile' : 'signInLink')
            }
            <FiArrowUpRight className="size-4 sm:size-4.5 md:size-5" />
        </Link>
    )
}