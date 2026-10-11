import { useTranslate } from "../../../../../../../translations/Translations";
import { LuStar } from "react-icons/lu";

export default function Rate() {

    const { line } = useTranslate()

    return (
        <button className="size-10 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 sm:w-fit sm:aspect-2/1 flex items-center justify-center sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm border rounded-lg sm:rounded-[11px] md:rounded-xl lg:rounded-md xl:rounded-lg 2xl:rounded-[10px] action-default border-action text-action">
            <span className="hidden sm:block">
                {line('rate')}
            </span>
            <LuStar className="size-1/2 sm:size-3.25 md:size-3.5 lg:size-2 xl:size-2.5 2xl:size-3" />
        </button>
    )
}