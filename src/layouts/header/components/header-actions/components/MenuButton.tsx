import { IoMenu } from "react-icons/io5";
import useOverlay from "../../../../../hooks/ui/useOverlay";
import HeaderButton from "../../../../../components/ui/buttons/HeaderButton";
import MobileMenu from "../../../../../components/ui/overlay/components/mobile-menu/MobileMenu";

export default function MenuButton() {

    const { openOverlay } = useOverlay()

    return (
        <HeaderButton className="lg:hidden" menu label="ariaOpenMenu" onClick={() => openOverlay(<MobileMenu />, { self: true, mobileOnly: true })}>
            <IoMenu className="size-1/2 text-zinc-600 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-100" />
        </HeaderButton>
    )
}