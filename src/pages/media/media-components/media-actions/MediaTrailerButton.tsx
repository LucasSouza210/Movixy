import { useTranslate } from "../../../../translations/Translations";
import { FaPlay } from "react-icons/fa";

export default function MediaTrailerButton() {

    const { line } = useTranslate()

    return (
        <button className="h-12 flex items-center gap-2 font-medium text-sm tracking-wider leading-none px-4 rounded-xl transition-all duration-300 ease-in-out cursor-pointer bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-zinc-100 hover:text-white">
            {line('mediaTrailer')}
            <FaPlay className="size-3" />
        </button>
    )
}