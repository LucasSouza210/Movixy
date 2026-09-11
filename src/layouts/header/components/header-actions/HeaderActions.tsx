import { useAuth } from "../../../../hooks/useAuth";
import HeaderNav from "../HeaderNav";
import HeaderSearchWrapper from "../header-search/HeaderSearch";
import LangButton from "../../../../components/ui/buttons/lang-button/LangButton";
import ModeButton from "../../../../components/ui/buttons/ModeButton";
import UserAvatarLink from "./components/UserAvatarLink";
import HeaderLogin from "./components/HeaderLogin";
import MenuButton from "./components/MenuButton";

export default function HeaderActions() {

    const { session } = useAuth()

    return (
        <div className="w-full h-full flex items-center justify-end lg:justify-between gap-4 sm:gap-4.5 md:gap-5 lg:gap-3.5 xl:gap-4.25 2xl:gap-5">
            <HeaderNav />
            <HeaderSearchWrapper />
            <div className="lg:h-full hidden lg:flex items-center lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <LangButton />
                <ModeButton />
                {
                    session ?
                        <UserAvatarLink />
                        :
                        <HeaderLogin />
                }
            </div>
            <MenuButton />
        </div>
    )
}