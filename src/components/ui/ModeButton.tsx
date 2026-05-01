import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

export default function ModeButton() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    const style = 'size-2/5 fill-zinc-600 group-hover:fill-zinc-700 lg:group-hover:fill-zinc-800 dark:fill-zinc-300 dark:group-hover:fill-zinc-100'

    return (
        <button className="size-10 lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border border-default rounded-xl lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl transition-all ease-in-out duration-200 cursor-pointer group bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 lg:bg-zinc-50 lg:hover:bg-zinc-100 lg:dark:bg-zinc-900/40 lg:dark:hover:bg-zinc-900/70" onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
            {
                mode == 'light' ?
                    <FaRegSun className={style} />
                    :
                    <FaRegMoon className={style} />
            }
        </button>
    )
}