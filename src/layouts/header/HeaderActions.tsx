import { useContext } from "react";
import { Contexts } from "../../contexts/ContextsProvider";
import { FaUserCircle } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";
import LangButton from "../../components/ui/LangButton";
import ModeButton from "../../components/ui/ModeButton";
import HeaderNav from "./HeaderNav";
import MenuButton from "./MenuButton";

export default function HeaderActions() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    return (
        <div className="lg:w-full lg:h-8 xl:h-9 2xl:h-10 flex items-center justify-end lg:justify-between gap-4 sm:gap-4.5 md:gap-5 lg:gap-3.5 xl:gap-4.25 2xl:gap-5">
            <HeaderNav />
            <HeaderSearch />
            <div className="lg:h-full hidden lg:flex items-center lg:gap-3 xl:gap-3.5 2xl:gap-4">
                <LangButton />
                <ModeButton />
                <button onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
                    <FaUserCircle className="size-6 sm:size-6.5 md:size-7 lg:size-7 xl:size-8 2xl:size-9 fill-zinc-400" />
                </button>
            </div>
            <MenuButton />
        </div>
    )
}