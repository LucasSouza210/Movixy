import { useTranslate } from "../../../translations/Translations"
import useListLimits from "../../../hooks/data/useListsLimits"

export default function FormSubmit({ label, disabled, newList = false }: { label: string, disabled: boolean, newList?: boolean }) {

    const { line } = useTranslate()

    const { listLimitReached } = useListLimits()

    return (
        <button type="submit" disabled={disabled || (newList && listLimitReached)} className={`min-w-28 sm:minw-30 md:min-w-32 lg:min-w-22 xl:min-w-24 2xl:min-w-26 h-12 sm:h-13 md:h-14 lg:h-10 xl:h-11 2xl:h-12 flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-4 xl:px-4 2xl:px-5 rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider ${(newList && listLimitReached) ? 'cursor-not-allowed bg-orange-500 text-zinc-100' : 'action-brand text-action-alternative'}`}>
            {line((listLimitReached && newList) ? 'limitReached' : label)}
        </button>
    )
}