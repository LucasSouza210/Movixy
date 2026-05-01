import { useNavLinks } from "../../hooks/useHeaderLinks";

export default function HeaderNav() {

    const links = useNavLinks()

    return (
        <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-7 2xl:gap-8">
            {
                links.map((link, index) => (
                    <a href={link.src} className="lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wide 2xl:tracking-wider leading-none text-zinc-700 dark:text-zinc-300" key={index}>{link.title}</a>
                ))
            }
        </nav>
    )
}