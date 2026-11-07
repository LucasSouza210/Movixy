import { useTranslate } from "../../../../../../../../../../../../translations/Translations"
import { FaCheck } from "react-icons/fa"

export default function TermsCheckbox({ toggle, checked }: { toggle: () => void, checked: boolean }) {

    const { line } = useTranslate()

    return (
        <button type="button" aria-label={line('ariaAcceptTerms')} className={`size-4.5 sm:size-4.75 md:size-5 lg:size-3.5 xl:size-4 2xl:size-4.5 flex items-center justify-center shrink-0 border rounded-[5px] md:rounded-md lg:rounded-sm 2xl:rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out action-default border-action`} onClick={toggle}>
            {checked && <FaCheck className="size-1/2 fill-zinc-500 dark:fill-zinc-300" />}
        </button>
    )
}