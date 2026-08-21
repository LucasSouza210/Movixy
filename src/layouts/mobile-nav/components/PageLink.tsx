import { useTranslate } from "../../../translations/Translations";
import type { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

export type NavigationLink = {
    title: string;
    src: string;
    icon: IconType;
}

export default function PageLink({ link }: { link: NavigationLink }) {

    const { line } = useTranslate()

    const location = useLocation()

    const active = location.pathname === link.src

    const Icon = link.icon

    return (
        <Link className="h-fit flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5" to={link.src}>
            <Icon className={`size-9/20 ${active ? 'text-orange-500' : 'text-zinc-500 dark:text-zinc-400'}`} />
            <p className={`text-[10px] sm:text-[11px] md:text-xs font-medium tracking-widest leading-4 sm:leading-4.25 md:leading-4.5 ${active ? 'text-orange-500' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {
                    line(link.title)
                }
            </p>
        </Link>
    )
}