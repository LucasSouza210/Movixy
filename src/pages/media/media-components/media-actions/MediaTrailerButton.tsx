import { useTranslate } from "../../../../translations/Translations";
import { FaPlay } from "react-icons/fa";

export default function MediaTrailerButton() {

    const { line } = useTranslate()

    return (
        <button className="h-12 sm:h-13 md:h-14 flex items-center gap-2 sm:gap-2.25 md:gap-2.5 font-medium text-sm sm:text-[15px] md:text-base tracking-wider leading-none px-4 sm:px-4.5 md:px-5 rounded-2xl sm:rounded-[17px] md:rounded-[18px] transition-all duration-300 ease-in-out cursor-pointer bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-zinc-100 hover:text-white">
            {line('mediaTrailer')}
            <FaPlay className="size-3 sm:size-3.25 md:size-3.5" />
        </button>
    )
}