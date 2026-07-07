import { TbWorld } from "react-icons/tb";
import useClickOutside from "../../../hooks/useClickOutside.ts";
import LangDropdown from "./LangDropdown.tsx";
import useLang from "../../../hooks/useLang.ts";

export default function LangButton() {

    const lang = useLang()

    const { ref, open, toggle, close } = useClickOutside()

    return (
        <div ref={ref} className="flex flex-col items-center relative">
            <button className="h-10 sm:h-11 md:h-12 lg:h-7 xl:h-8 2xl:h-9 flex items-center gap-1 sm:gap-1.75 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 border border-default rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wide leading-none uppercase px-4 sm:px-5 md:px-6 lg:px-3 xl:px-3.5 2xl:px-4 transition-all ease-in-out duration-200 cursor-pointer bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 lg:bg-zinc-50 lg:hover:bg-zinc-100 lg:dark:bg-zinc-900/40 lg:dark:hover:bg-zinc-900/70 text-zinc-600 hover:fill-zinc-700 lg:hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100" onClick={toggle}>
                <TbWorld className="size-3.5 sm:size-4 md:size-4.5 lg:size-3 xl:size-3.25 2xl:size-3.5" />
                {lang}
            </button>
            <LangDropdown open={open} close={close} />
        </div>
    )
}