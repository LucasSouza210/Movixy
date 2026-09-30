import { navLinks } from "../../utils/navLinks"
import PageLink from "./components/PageLink"

export default function MobileNav() {
    return (
        <div className="w-full flex lg:hidden items-end justify-center gap-8 sm:gap-10 md:gap-12 fixed left-0 bottom-0 z-30 backdrop-blur-xl border-t py-3.5 sm:py-4 md:py-4.5 bg-white/55 dark:bg-black/75 border-zinc-400/40 dark:border-zinc-600/40">
            {
                navLinks.map((i, index) => (
                    <PageLink link={i} key={index} />
                ))
            }
        </div>
    )
}