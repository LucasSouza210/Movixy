import { useNavLinks } from "../../hooks/useHeaderLinks"
import PageLink from "./components/PageLink"

export default function MobileNav() {

    const links = useNavLinks()

    return (
        <div className="w-full h-16 sm:h-18 md:h-20 flex lg:hidden items-end justify-center gap-8 sm:gap-10 md:gap-12 fixed left-0 bottom-0 z-30 backdrop-blur-xl border-t pb-3.5 sm:pb-3.75 md:pb-4 bg-white/55 dark:bg-black/75 border-zinc-400/40 dark:border-zinc-600/40">
            {
                links.map((i, index) => (
                    <PageLink link={i} key={index} />
                ))
            }
        </div>
    )
}