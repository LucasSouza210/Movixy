import { useTranslate } from "../../../../translations/Translations";
import { FaUserCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function MenuPerfil() {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                <FaUserCircle className="size-12 sm:size-13 md:size-14 fill-zinc-400" />
                <p className="text-base sm:text-lg md:text-xl font-medium tracking-wider leading-none text-zinc-700 dark:text-zinc-200">John Doe</p>
            </div>
            <button className="h-12 sm:h-13 md:h-14 flex items-center justify-center gap-2 border rounded-2xl sm:rounded-[18px] md:rounded-[20px] border-default transition-all ease-in-out duration-200 cursor-pointer bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                <p className="text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none">{line('viewProfile')}</p>
                <FiArrowUpRight className="size-4 sm:size-4.5 md:size-5" />
            </button>
        </div>
    )
}