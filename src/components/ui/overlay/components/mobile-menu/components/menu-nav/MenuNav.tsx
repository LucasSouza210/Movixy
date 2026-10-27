import { navLinks } from "../../../../../../../utils/navLinks"
import MenuLink from "./components/MenuLink"

export default function MenuNav() {
    return (
        <nav className="w-full flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 py-3 sm:py-3.25 md:py-3.5 border-y border-default">
            {
                navLinks.slice(0, 3).map((link, index) => (
                    <MenuLink link={link} key={index} />
                ))
            }
        </nav>
    )
}