import { useTranslate } from "../../../../translations/Translations";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";

export default function MediaSaveButton() {

    const { line } = useTranslate()

    const getIcon = () => {
        return (
            true ? FaRegBookmark : FaBookmark
        )
    }

    return (
        <button className="h-12 flex items-center gap-2 border rounded-2xl font-medium text-sm tracking-wider leading-none px-4 transition-all duration-300 ease-in-out cursor-pointer bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900/50 border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-200">
            {line('saveMedia')}
            {getIcon()({ className: 'size-3 fill-zinc-400' })}
        </button>
    )
}