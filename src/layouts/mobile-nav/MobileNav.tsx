import { useAuth } from "../../hooks/useAuth"
import { navLinks } from "../../utils/navLinks"
import PageLink from "./components/PageLink"

export default function MobileNav() {

    const { session, authInitializing } = useAuth()

    const links = session ? navLinks.filter(i => i.src != '/auth') : navLinks.filter(i => i.src != '/user')

    return (
        <div className="w-full h-16 sm:h-18 md:h-20 flex lg:hidden items-center justify-center gap-8 sm:gap-10 md:gap-12 fixed left-0 bottom-0 z-30 border-t backdrop-blur-md bg-layout border-default">
            {
                !authInitializing &&

                links.map((i, index) => (
                    <PageLink link={i} key={index} />
                ))
            }
        </div>
    )
}