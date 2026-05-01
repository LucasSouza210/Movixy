import { useNavLinks } from "../../../../hooks/useHeaderLinks"
import MenuLink from "./MenuLink"

export default function MenuNav() {

    const links = useNavLinks()

    return (
        <nav className="w-full flex flex-col">
            {
                links.map((link, index) => (
                    <MenuLink title={link.title} href={link.src} index={index} key={index}/>
                ))
            }
        </nav>
    )
}