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
        <Link className={`h-fit flex flex-col items-center gap-1 sm:gap-1 md:gap-1.5 group transition-all duration-300 ease-in-out ${active ? 'text-orange-500' : 'text-default hover:text-orange-500'}`} to={link.src}>
            <Icon className="size-9/20" />
            <p className="text-[10px] sm:text-[11px] md:text-xs font-medium tracking-widest">
                {
                    line(link.title)
                }
            </p>
        </Link>
    )
}