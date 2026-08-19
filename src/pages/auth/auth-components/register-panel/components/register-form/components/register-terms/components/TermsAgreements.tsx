import { useTranslate } from "../../../../../../../../../translations/Translations"

export default function TermsAgreements() {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-zinc-500 dark:text-zinc-400">
            {line('termsAgreement')} <a href="#" className="cursor-pointer transition-all duration-300 ease-in-out hover:underline underline-offset-5 sm:underline-offset-6 md:underline-offset-7 lg:underline-offset-4 xl:underline-offset-5 2xl:underline-offset-6 decoration-1 text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white">
                {line('termsLink')}
            </a>.
        </p>
    )
}