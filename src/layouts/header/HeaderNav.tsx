import { Link, useLocation } from "react-router-dom";
import { useNavLinks } from "../../hooks/useHeaderLinks";

export default function HeaderNav() {

    const location = useLocation()

    const links = useNavLinks()

    return (
        <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-7 2xl:gap-8">
            {
                links.map((link, index) => (
                    <Link to={link.src} className={`${location.pathname === link.src ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white'} lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide 2xl:tracking-wider leading-none transition-all duration-200 ease-in-out`} key={index}>{link.title}</Link>
                ))
            }
        </nav>
    )
}