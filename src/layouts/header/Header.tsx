import { PiFilmReelFill } from "react-icons/pi";
import HeaderActions from "./HeaderActions";

export default function Header() {
    return (
        <header className="w-full h-15 sm:h-16 md:h-17 lg:h-14 xl:h-15.5 2xl:h-17 flex justify-between lg:justify-center items-center lg:gap-6 xl:gap-7 2xl:gap-8 border-b px-5 sm:px-6 md:px-7 lg:px-5 xl:px-5.5 2xl:px-6 fixed top-0 left-0 z-30 backdrop-blur-lg border-default bg-white/55 dark:bg-black/15">
            <PiFilmReelFill className="size-6 sm:size-7 md:size-8 lg:size-6 xl:size-6.5 2xl:size-7 fill-orange-500 dark:fill-orange-400" />
            <HeaderActions />
        </header>
    )
}