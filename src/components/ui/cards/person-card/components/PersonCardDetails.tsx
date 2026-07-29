import { useMemo } from "react";
import { useTranslate } from "../../../../../translations/Translations";
import type { PersonCardInfo } from "../../../../../types/tmdb";
import filterCredits from "../../../../../utils/tmdb/filterCredits";

export default function PersonCardDetails({ actor }: { actor: PersonCardInfo }) {

    const { line } = useTranslate()

    const credits = useMemo(() => {
        if (!actor.credits) return []
        return filterCredits(actor.credits)
    }, [actor]).length

    const label = credits ? `${credits} ${line(credits == 1 ? 'project' : 'projects')}` : line('noProjects')

    return (
        <div className="flex flex-col items-center gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.75 2xl:gap-1">
            <p className="w-fit text-center font-medium text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base tracking-wider leading-5 sm:leading-5.5 md:leading-6 lg:leading-5 xl:leading-5.75 2xl:leading-6.5 line-clamp-2 text-black dark:text-white">{actor.name ?? line('notInformed')}</p>
            <p className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wide text-center leading-4.5 sm:leading-5 md:leading-5.5 lg:leading-4.5 xl:leading-5 2xl:leading-5.5 text-zinc-700 dark:text-zinc-300">{label}</p>
        </div>
    )
}