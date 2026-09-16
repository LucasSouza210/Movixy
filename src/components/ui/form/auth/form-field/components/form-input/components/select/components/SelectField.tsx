import type { MouseEventHandler } from "react";
import type { SelectOption } from "../../../../../FormField";
import { useTranslate } from "../../../../../../../../../../translations/Translations";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function SelectField({ option, open, onClick }: { option: SelectOption, open: boolean, onClick: MouseEventHandler }) {

    const { line } = useTranslate()

    const Icon = option.icon

    const ToggleIcon = open ? IoIosArrowUp : IoIosArrowDown

    return (
        <button className="size-full flex items-center justify-between text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider px-3.5 sm:px-4 md:px-4.5 lg:px-3 xl:px-3.75 2xl:px-4 relative text-zinc-500 dark:text-zinc-300" type="button" onClick={onClick} >
            <div className="flex items-center gap-1.5 sm:gap-2.25 md:gap-2">
                <Icon/>
                {
                    line(option.label)
                }
            </div>
            <ToggleIcon className="size-5 sm:size-5.5 md:size-6 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-500 dark:fill-zinc-400" />
        </button>
    )
}