import { useTranslate } from "../../../translations/Translations"
import { FaHome } from "react-icons/fa";

export default function HomeLink() {

    const { line } = useTranslate()

    return (
        <a className="min-w-30 sm:min-w-35 md:min-w-40 lg:min-w-26 xl:min-w-29 2xl:min-w-32 h-12 sm:h-14 md:h-16 lg:h-10 xl:h-11 2xl:h-12 flex items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-4 rounded-[14px] sm:rounded-[17px] md:rounded-[20px] lg:rounded-xl xl:rounded-[13px] 2xl:rounded-[14px] bg-orange-500 text-zinc-100" href="/">
            {line('home')}
            <FaHome />
        </a>
    )
}