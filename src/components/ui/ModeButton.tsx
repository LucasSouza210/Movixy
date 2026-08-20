import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

export default function ModeButton() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    const style = 'size-2/5 fill-zinc-600 group-hover:fill-zinc-700 lg:group-hover:fill-zinc-800 dark:fill-zinc-300 dark:group-hover:fill-zinc-100'

    return (
        <button className="size-10 sm:size-11 md:size-12 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border border-default rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] transition-all ease-in-out duration-200 cursor-pointer group bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 lg:bg-zinc-50 lg:hover:bg-zinc-100 lg:dark:bg-zinc-900/40 lg:dark:hover:bg-zinc-900/70 text-zinc-600 hover:fill-zinc-700 lg:hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100" onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
            {
                mode == 'light' ?
                    <FaRegSun className={style} />
                    :
                    <FaRegMoon className={style} />
            }
        </button>
    )
}