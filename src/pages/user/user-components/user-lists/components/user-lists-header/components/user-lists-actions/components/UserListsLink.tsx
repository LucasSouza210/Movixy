import { Link } from "react-router-dom";
import { useTranslate } from "../../../../../../../../../translations/Translations"
import { LuArrowUpRight } from "react-icons/lu";

export default function UserListsLink() {

    const { line } = useTranslate()

    return (
        <Link to={'lists'} className="h-8 sm:h-9 md:h-10 lg:h-7 xl:h-8 2xl:h-9 flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 px-3 sm:px-3.5 md:px-4 lg:px-2.5 xl:px-3 2xl:px-3.5 border border-default rounded-full text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-300">
            {line('viewAll')}
            <LuArrowUpRight className="size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-3 2xl:size-3.5" />
        </Link>
    )
}