import { navLinks } from "../../utils/navLinks"
import PageLink from "./components/PageLink"

export default function MobileNav() {
    return (
        <div className="w-full flex lg:hidden items-end justify-center gap-8 sm:gap-10 md:gap-12 fixed left-0 bottom-0 z-30 border-t py-3.5 sm:py-4 md:py-4.5 backdrop-blur-md bg-layout border-default">
            {
                navLinks.map((i, index) => (
                    <PageLink link={i} key={index} />
                ))
            }
        </div>
    )
}