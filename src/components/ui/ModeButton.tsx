import { useContext } from "react"
import { Contexts } from "../../contexts/ContextsProvider"
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

export default function ModeButton() {

    const contexts = useContext(Contexts)

    const { mode, setMode } = contexts!

    const style = 'size-2/5 fill-zinc-600 group-hover:fill-zinc-800 dark:fill-zinc-300 dark:group-hover:fill-zinc-100'

    return (
        <button className="lg:size-7 xl:size-8 2xl:size-9 flex items-center justify-center border border-default lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl transition-all ease-in-out duration-200 cursor-pointer group bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/70" onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
            {
                mode == 'light' ?
                    <FaRegSun className={style} />
                    :
                    <FaRegMoon className={style} />
            }
        </button>
    )
}