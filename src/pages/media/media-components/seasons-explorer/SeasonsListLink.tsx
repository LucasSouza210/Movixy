import { useTranslate } from "../../../../translations/Translations";
import { IoIosArrowForward } from "react-icons/io";

export default function SeasonsListLink() {

    const { line } = useTranslate()

    return (
        <a href="" className="w-fit flex items-center gap-1 font-medium text-base tracking-wider leading-none transition-all duration-300 cursor-pointer ease-in-out text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-400">
            {line('showEpisodes')}
            <IoIosArrowForward className="size-4" />
        </a>
    )
}