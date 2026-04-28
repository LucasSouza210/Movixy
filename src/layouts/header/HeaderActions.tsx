import { useContext } from "react";
import { Contexts } from "../../contexts/ContextsProvider";
import { FaUserCircle } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";


export default function HeaderActions() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    return (
        <div className="flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-5.5 2xl:gap-5">
            <HeaderSearch />
            <button onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
                <FaUserCircle className="size-6 sm:size-6.5 md:size-7 lg:size-6 xl:size-6.5 2xl:size-7 fill-zinc-300 dark:fill-zinc-200" />
            </button>
        </div>
    )
}