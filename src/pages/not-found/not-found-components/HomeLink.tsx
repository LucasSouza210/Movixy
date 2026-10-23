import { useTranslate } from "../../../translations/Translations"
import { FaHome } from "react-icons/fa";

export default function HomeLink() {

    const { line } = useTranslate()

    return (
        <a className="h-12 sm:h-14 md:h-16 lg:h-10 xl:h-11 2xl:h-12 flex items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-sm sm:text-base md:text-lg lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-5 xl:px-6 2xl:px-7 rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] action-brand text-action-alternative" href="/">
            {line('homeLink')}
            <FaHome />
        </a>
    )
}