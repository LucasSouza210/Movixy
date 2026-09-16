import type { SelectOption } from "../../../../../../FormField";
import { useTranslate } from "../../../../../../../../../../../translations/Translations";
import type { SetStateAction } from "react";

export default function Option({ option, selected, setSelected, close }: { option: SelectOption, selected: SelectOption, setSelected: React.Dispatch<SetStateAction<SelectOption>>, close: () => void }) {

    const { line } = useTranslate()

    const isSelected = option == selected

    const Icon = option.icon

    const handleClick = () => {
        close()
        setSelected(option)
    }

    return (
        <button className={`w-full h-12 sm:h-13 md:h-14 lg:h-10 xl:h-11 2xl:h-12 flex items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[9px] xl:rounded-[10px] 2xl:rounded-[11px] text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider px-4 sm:px-4.5 md:px-5 lg:px-3.5 xl:px-3.75 2xl:px-4 ${isSelected ? 'border bg-zinc-50 dark:bg-[#151517] border-zinc-200 dark:border-zinc-800 text-orange-500' : 'text-zinc-500 dark:text-zinc-300'}`} type="button" onClick={() => handleClick()}>
            <Icon />
            {
                line(option.label)
            }
        </button>
    )
}