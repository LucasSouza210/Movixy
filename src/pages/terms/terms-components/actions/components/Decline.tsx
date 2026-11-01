import { useTranslate } from "../../../../../translations/Translations"
import useTermsDecision from "../../../../../hooks/auth/useTermsDecision"

export default function Decline() {

    const { line } = useTranslate()

    const { decline } = useTermsDecision()

    return (
        <button className="h-12 sm:h-13 md:h-14 lg:h-8 xl:h-10 2xl:h-12 aspect-2/1 flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1 xl:gap-1.5 2xl:gap-2 border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-md xl:rounded-lg 2xl:rounded-[10px] font-medium text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider lg:tracking-wide leading-none action-default border-action text-action" onClick={decline}>
            {line('decline')}
        </button>
    )
}