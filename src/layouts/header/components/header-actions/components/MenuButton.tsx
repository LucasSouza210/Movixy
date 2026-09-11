import useOverlay from "../../../../../hooks/useOverlay";
import MobileMenu from "../../../../../components/ui/overlay/mobile-menu/MobileMenu";
import { IoMenu } from "react-icons/io5";
import HeaderButton from "../../../../../components/ui/buttons/HeaderButton";

export default function MenuButton() {

    const { openOverlay } = useOverlay()

    return (
        <HeaderButton className="lg:hidden" menu onClick={() => openOverlay(<MobileMenu />, { self: true })}>
            <IoMenu className="size-1/2 text-zinc-600 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-100" />
        </HeaderButton>
    )
}