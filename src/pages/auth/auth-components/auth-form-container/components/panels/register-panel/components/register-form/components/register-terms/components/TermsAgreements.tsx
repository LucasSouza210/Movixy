import { Link } from "react-router-dom"
import { useTranslate } from "../../../../../../../../../../../../translations/Translations"

export default function TermsAgreements({ onOpenTerms }: { onOpenTerms: () => void }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-5 xl:leading-5.5 2xl:leading-6 text-zinc-400">
            {line('termsAgreement')} <Link to="/terms" state={{ fromAuth: true }} onClick={onOpenTerms} className="hover:underline underline-offset-5 sm:underline-offset-6 md:underline-offset-7 lg:underline-offset-4 xl:underline-offset-5 2xl:underline-offset-6 decoration-1 text-action-secondary">
                {line('termsLink')}
            </Link>.
        </p>
    )
}