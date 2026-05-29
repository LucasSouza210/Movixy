import { useContext } from "react";
import { type IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { Contexts } from "../../../../contexts/ContextsProvider";

export default function MenuLink({ title, href, icon }: { title: string, href: string, icon: IconType, index: number }) {

    const contexts = useContext(Contexts)

    const { setOverlay } = contexts!

    const location = useLocation()

    const Icon = icon

    return (
        <Link to={href} className={`${location.pathname == href ? 'text-orange-600 dark:text-orange-500 bg-white dark:bg-zinc-950/30' : 'text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white hover:bg-white/80 dark:hover:bg-zinc-950/20'} w-full h-12 sm:h-13 md:h-14 flex items-center gap-2 sm:gap-2.5 md:gap-3 px-5 sm:px-6 md:px-7 rounded-2xl text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none`} onClick={() => setOverlay(null)}>
            <Icon className="size-4 sm:size-4.5 md:size-5" />
            {title}
        </Link>
    )
}