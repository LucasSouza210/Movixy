import LangButton from "../../../../components/ui/lang-selection/LangButton";
import ModeButton from "../../../../components/ui/ModeButton";
import HeaderNav from "../.././HeaderNav";
import MenuButton from "../header-actions/MenuButton";
import HeaderSearchWrapper from "../.././header-search/HeaderSearch";
import UserAvatarLink from "../header-actions/UserAvatarLink";

export default function HeaderActions() {

    return (
        <div className="w-full h-full flex items-center justify-end lg:justify-between gap-4 sm:gap-4.5 md:gap-5 lg:gap-3.5 xl:gap-4.25 2xl:gap-5">
            <HeaderNav />
            <HeaderSearchWrapper />
            <div className="lg:h-full hidden lg:flex items-center lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <LangButton />
                <ModeButton />
                <UserAvatarLink />
            </div>
            <MenuButton />
        </div>
    )
}