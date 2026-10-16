import { navLinks } from "../../../../../../../utils/navLinks"
import MenuLink from "./components/MenuLink"

export default function MenuNav() {
    return (
        <nav className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 py-4 sm:py-4.5 md:py-5 border-y border-default">
            {
                navLinks.slice(0, 3).map((link, index) => (
                    <MenuLink link={link} key={index} />
                ))
            }
        </nav>
    )
}