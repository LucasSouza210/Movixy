import { useTranslate } from "../../../../../../../translations/Translations";
import { RxExit } from "react-icons/rx";

export default function MenuLogOut() {

    const { line } = useTranslate()

    return (
        <button className="w-fit h-12 sm:h-13 md:h-14 flex items-center justify-start gap-2 sm:gap-2.5 md:gap-3 px-4 sm:px-5 md:px-6 rounded-xl sm:rounded-[14px] md:rounded-2xl border border-default transition-all ease-in-out duration-200 cursor-pointer bg-white hover:bg-white/40 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/20 text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100">
            <p className="text-sm sm:text-[15px] md:text-base font-medium tracking-wider leading-none">{line('signOut')}</p>
            <RxExit className="size-3.5 sm:size-4 md:size-4.5" />
        </button>
    )
}