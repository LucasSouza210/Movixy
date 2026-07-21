import { useTranslate } from "../../../../../../translations/Translations"
import { LuSearchX } from "react-icons/lu";

export default function NoResultsMessage() {

    const { line } = useTranslate()

    return (
        <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <LuSearchX className="size-1/5 lg:size-1/6 text-zinc-400 dark:text-zinc-300" />
            <div className="flex flex-col items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.5 xl:gap-1 2xl:gap-1.5">
                <p className="sm:max-w-7/10 lg:max-w-none xl:max-w-7/10 text-lg sm:text-[19px] md:text-xl lg:text-base xl:text-[19px] 2xl:text-xl font-medium tracking-wider text-center leading-6 sm:leading-6.5 md:leading-7 lg:leading-5.5 xl:leading-6 2xl:leading-6.5 text-zinc-800 dark:text-white">{line('noResultsTitle')}</p>
                <p className="sm:max-w-7/10 lg:max-w-none xl:max-w-7/10 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-4.5 sm:leading-5.25 md:leading-6 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 text-center text-zinc-500 dark:text-zinc-300">{line('checkSpelling')}</p>
            </div>
        </div>
    )
}