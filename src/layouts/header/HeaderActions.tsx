import { useContext } from "react";
import { Contexts } from "../../contexts/ContextsProvider";
import { FaUserCircle } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";
import LangButton from "../../components/ui/LangButton";


export default function HeaderActions() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    return (
        <div className="lg:h-7 xl:h-8 2xl:h-9 flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-5 xl:gap-5.5 2xl:gap-6">
            <HeaderSearch />
            <LangButton />
            <button onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
                <FaUserCircle className="size-6 sm:size-6.5 md:size-7 lg:size-6 xl:size-7 2xl:size-8 fill-zinc-300 dark:fill-zinc-200" />
            </button>
        </div>
    )
}