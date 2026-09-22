import { useContext } from "react";
import { type IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { Contexts } from "../../../../../../../contexts/ContextsProvider";
import { useTranslate } from "../../../../../../../translations/Translations";

type Link = {
    title: string
    src: string
    icon: IconType
}

export default function MenuLink({ link }: { link: Link }) {

    const contexts = useContext(Contexts)

    const { setOverlay } = contexts!

    const { line } = useTranslate()

    const location = useLocation()

    const Icon = link.icon

    return (
        <Link to={link.src} className={`w-full h-12 sm:h-13 md:h-14 flex items-center gap-2 sm:gap-2.5 md:gap-3 px-5 sm:px-6 md:px-7 rounded-[10px] sm:rounded-xl md:rounded-[14px] text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none ${location.pathname == link.src ? 'border border-default text-orange-600 dark:text-orange-500 bg-white dark:bg-[#0f0f11]' : 'text-zinc-500 hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-200 hover:bg-white dark:hover:bg-[#0f0f11]'}`} onClick={() => setOverlay(null)}>
            <Icon className="size-4 sm:size-4.5 md:size-5" />
            {
                line(link.title)
            }
        </Link>
    )
}