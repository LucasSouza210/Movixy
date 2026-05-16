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
        <button className="h-12 flex items-center gap-2 border border-default rounded-2xl font-medium text-sm tracking-wider leading-none px-4 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300">
            {line('saveMedia')}
            {getIcon()({ className: 'size-3 fill-zinc-400' })}
        </button>
    )
}