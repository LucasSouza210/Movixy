import { useTranslate } from "../../../../translations/Translations";
import { IoIosArrowForward } from "react-icons/io";

export default function SeasonsListLink() {

    const { line } = useTranslate()

    return (
        <a href="" className="w-fit flex items-center gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1 font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-400">
            {line('showEpisodes')}
            <IoIosArrowForward className="size-4 sm:size-4.5 md:size-5 lg:size-4 xl:size-4.5 2xl:size-5" />
        </a>
    )
}