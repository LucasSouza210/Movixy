import { PiGearLight } from "react-icons/pi";

export default function MenuConfig() {
    return (
        <a href="" className="size-12 sm:size-13 md:size-14 flex items-center justify-center rounded-xl sm:rounded-[14px] md:rounded-2xl border border-default transition-all ease-in-out duration-200 cursor-pointer bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100">
            <PiGearLight className="size-1/2"/>
        </a>
    )
}