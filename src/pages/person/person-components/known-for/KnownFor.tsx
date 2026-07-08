import { useTranslate } from "../../../../translations/Translations"
import type { PersonCredit } from "../../../../types/tmdb"
import PersonTopCredits from "./PersonTopCredits"

export default function KnownFor({ credits, loading }: { credits: PersonCredit[], loading: boolean }) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('knownForTitle')}</p>
            <PersonTopCredits credits={credits} loading={loading} />
        </div>
    )
}