import { useTranslate } from "../../../../translations/Translations";
import { FaPlay } from "react-icons/fa";

export default function MediaTrailerButton() {

    const { line } = useTranslate()

    return (
        <button className="h-12 sm:h-13 md:h-14 lg:h-8 flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] tracking-wider lg:tracking-wide leading-none px-4 sm:px-4.5 md:px-5 lg:px-3 rounded-2xl sm:rounded-[17px] md:rounded-[18px] lg:rounded-xl transition-all duration-300 ease-in-out cursor-pointer bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-zinc-100 hover:text-white">
            {line('mediaTrailer')}
            <FaPlay className="size-2.5 sm:size-2.75 md:size-3 lg:size-1.5" />
        </button>
    )
}