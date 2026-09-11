import { Link, useLocation } from "react-router-dom";
import { useTranslate } from "../../../translations/Translations";
import { navLinks } from "../../../utils/navLinks";

export default function HeaderNav() {

    const { line } = useTranslate()

    const location = useLocation()

    return (
        <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-7 2xl:gap-8">
            {
                navLinks.slice(0, 3).map((link, index) => (
                    <Link to={link.src} className={`lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide 2xl:tracking-wider leading-none transition-all duration-200 ease-in-out ${location.pathname === link.src ? 'text-orange-500' : 'text-zinc-700 dark:text-zinc-300 hover:text-orange-400'}`} key={index}>
                        {
                            line(link.title)
                        }
                    </Link>
                ))
            }
        </nav>
    )
}