import { useTranslate } from "../../translations/Translations";
import { IoSearch } from "react-icons/io5";

export default function HeaderSearch() {

    const { line } = useTranslate()

    return (
        <div className="w-auto lg:w-1/4 h-auto lg:h-full flex items-center overflow-hidden lg:rounded-full lg:border lg:bg-zinc-100 lg:dark:bg-zinc-900/40 lg:border-zinc-300 lg:dark:border-zinc-800">
            <button className="block lg:hidden group cursor-pointer">
                <IoSearch className="size-5 sm:size-5.5 md:size-6 lg:size-5 xl:size-5.5 2xl:size-6 transition-all ease-in-out duration-200 fill-zinc-500 hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:fill-white" />
            </button>
            <div className="h-auto lg:h-8 xl:h-9 2xl:h-10 lg:aspect-square hidden lg:flex items-center justify-center lg:px-2 xl:px-2.5 2xl:px-3">
                <IoSearch className="hidden lg:block lg:h-1/2 transition-all ease-in-out duration-200 fill-zinc-500 hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:fill-white" />
            </div>
            <input type="text" placeholder={line('searchPlaceholder')} className="hidden lg:block h-full w-full outline-none lg:pr-2 xl:pr-2.5 2xl:pr-3 lg:text-xs xl:text-[13px] 2xl:text-sm lg:placeholder:text-xs 2xl:placeholder:text-sm font-medium placeholder:text-zinc-600 dark:placeholder:text-zinc-400 text-zinc-700 dark:text-zinc-300" />
        </div>
    )
}