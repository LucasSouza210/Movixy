import { useTranslate } from "../../../translations/Translations"

export default function FormSubmit({ label, disabled }: { label: string, disabled: boolean }) {

    const { line } = useTranslate()

    return (
        <button type="submit" disabled={disabled} className="min-w-28 sm:minw-30 md:min-w-32 lg:min-w-22 xl:min-w-24 2xl:min-w-26 h-12 sm:h-13 md:h-14 lg:h-10 xl:h-11 2xl:h-12 flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-4 xl:px-4 2xl:px-5 rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider action-brand text-action-alternative">
            {line(label)}
        </button>
    )
}