import { useTranslate } from "../../../../../translations/Translations";
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
        <button className="h-12 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px] font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider lg:tracking-wide leading-none px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-4 2xl:px-5 transition-all duration-300 ease-in-out cursor-pointer action-default border-action text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-200">
            {line('saveMedia')}
            {getIcon()({ className: 'size-3 sm:size-3.25 md:size-3.5 lg:size-2 xl:size-2.5 2xl:size-3 fill-zinc-400' })}
        </button>
    )
}