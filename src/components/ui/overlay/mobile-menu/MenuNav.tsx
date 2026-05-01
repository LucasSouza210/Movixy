import { useNavLinks } from "../../../../hooks/useHeaderLinks"
import MenuLink from "./MenuLink"

export default function MenuNav() {

    const links = useNavLinks()

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8">
            <span className="w-full h-px bg-zinc-300 dark:bg-zinc-700" />
            <nav className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4">
                {
                    links.map((link, index) => (
                        <MenuLink title={link.title} href={link.src} icon={link.icon} index={index} key={index} />
                    ))
                }
            </nav>
            <span className="w-full h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>
    )
}