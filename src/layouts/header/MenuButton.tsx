import useOverlay from "../../hooks/useOverlay";
import MobileMenu from "../../components/ui/overlay/mobile-menu/MobileMenu";
import { IoMenu } from "react-icons/io5";

export default function MenuButton() {

    const { openOverlay } = useOverlay()

    return (
        <button className="size-7 md:size-8 flex lg:hidden items-center justify-center border border-default rounded-lg sm:rounded-[9px] md:rounded-[10px] transition-all ease-in-out duration-200 cursor-pointer group" onClick={() => openOverlay(<MobileMenu />, { self: true })}>
            <IoMenu className="size-1/2 text-zinc-600 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-100" />
        </button>
    )
}