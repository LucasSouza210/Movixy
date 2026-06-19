import { useTranslate } from "../../../../translations/Translations"
import type { ActorCredit } from "../../../../types/tmdb"
import ActorTopCredits from "./ActorTopCredits"

export default function KnownFor({credits}: {credits: ActorCredit[]}) {

    const { line } = useTranslate()

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('knownForTitle')}</p>
            <ActorTopCredits credits={credits}/>
        </div>
    )
}