import { navLinks } from "../../../../../../utils/navLinks"
import MenuLink from "./components/MenuLink"

export default function MenuNav() {
    return (
        <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7">
            <span className="w-full h-px bg-zinc-300 dark:bg-zinc-700" />
            <nav className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4">
                {
                    navLinks.slice(0, 3).map((link, index) => (
                        <MenuLink link={link} key={index} />
                    ))
                }
            </nav>
            <span className="w-full h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>
    )
}