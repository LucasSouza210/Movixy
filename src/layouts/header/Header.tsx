import { PiFilmReelFill } from "react-icons/pi";
import HeaderActions from "./HeaderActions";

export default function Header() {
    return (
        <header className="w-full h-16 sm:h-17 md:h-18 lg:h-14 xl:h-16 2xl:h-18 flex justify-between lg:justify-center items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 border-b px-5 sm:px-6 md:px-7 lg:px-5 xl:px-5.5 2xl:px-6 sticky top-0 left-0 z-30 backdrop-blur-lg bg-white/55 dark:bg-black/15 border-zinc-400/40 dark:border-zinc-700/40">
            <PiFilmReelFill className="size-7 sm:size-7.5 md:size-8 lg:size-6 xl:size-6.5 2xl:size-7 fill-orange-500 dark:fill-orange-400" />
            <HeaderActions />
        </header>
    )
}