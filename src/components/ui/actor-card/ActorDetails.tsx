import useActorInfo from "../../../hooks/useActorInfo";
import { useTranslate } from "../../../translations/Translations";
import type { Actor } from "../../../types/tmdb";

export default function ActorDetails({ actor }: { actor: Actor }) {

    const { info } = useActorInfo(actor.id)
    const { line } = useTranslate()

    return (
        <div className="flex flex-col items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75">
            <p className="w-fit text-center font-medium text-sm sm:-[15px] md:text-base lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-5 xl:leading-5.75 2xl:leading-6.5 text-black dark:text-white">{actor.name}</p>
            <p className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wide leading-none text-zinc-700 dark:text-zinc-300">{info?.cast?.length} {line('projects')}</p>
        </div>
    )
}