import { useTranslate } from "../../../../../../../translations/Translations"
import { BsDot } from "react-icons/bs";
import useListLimits from "../../../../../../../hooks/data/useListsLimits"

export default function Title() {

    const { line } = useTranslate()

    const { listsCount } = useListLimits()

    return (
        <p className="flex items-center gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1 font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider leading-none text-title">
            {line('userListsTitle')}
            <BsDot className="text-default" />
            <span className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-default">
                {`${listsCount} / 50`}
            </span>
        </p>
    )
}