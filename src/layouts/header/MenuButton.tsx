import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { Contexts } from "../../contexts/ContextsProvider";

export default function MenuButton() {

    const contexts = useContext(Contexts)

    const { overlay, setOverlay } = contexts!

    return (
        <button className="size-7 md:size-8 flex lg:hidden items-center justify-center border border-default rounded-lg sm:rounded-[9px] md:rounded-[10px] transition-all ease-in-out duration-200 cursor-pointer group" onClick={() => {}}>
            <IoMenu className="size-1/2 text-zinc-600 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-100" />
        </button>
    )
}