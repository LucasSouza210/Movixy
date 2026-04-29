import { useContext } from "react";
import { Contexts } from "../../contexts/ContextsProvider";
import { TbWorld } from "react-icons/tb";

export default function LangButton() {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    return (
        <button className="h-full hidden lg:flex items-center gap-1.5 xl:gap-1.75 2xl:gap-2 border border-default rounded-xl xl:rounded-[13px] 2xl:rounded-[14px] font-medium text-xs tracking-wide leading-none uppercase px-3 xl:px-3.5 2xl:px-4 transition-all ease-in-out duration-200 cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100">
            <TbWorld className="h-1/2" />
            {lang}
        </button>
    )
}