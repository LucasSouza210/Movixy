import { useTranslate } from "../../../../translations/Translations";
import { FaPlay } from "react-icons/fa";

export default function MediaTrailerButton() {

    const { line } = useTranslate()

    return (
        <button className="h-12 flex items-center gap-2 font-medium text-sm tracking-wider leading-none px-4 rounded-xl bg-orange-500 dark:bg-orange-600 text-white">
            {line('mediaTrailer')}
            <FaPlay className="size-3" />
        </button>
    )
}