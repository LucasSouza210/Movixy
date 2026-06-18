import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import type { ActorDetails } from "../../../../types/tmdb";
import type { Lang } from "../../../../components/ui/lang-selection/DropdownButton";
import getAge from "../../../../utils/tmdb/getAge";
import ActorBadges from "./ActorBadges";
import { MdOutlineCake } from "react-icons/md";
import { TbGrave } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

export default function ActorInfo({ actor }: { actor: ActorDetails }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    function formatDate(date: string | null | undefined, locale: Lang) {
        if (!date || !locale) return ""

        const [year, month, day] = date.split("-")

        switch (locale) {
            case "en": return `${month}/${day}/${year}`
            default: return `${day}/${month}/${year}`
        }
    }

    return (
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-4 sm:pt-5 md:pt-6">
            <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wider leading-6 text-black dark:text-white">{actor.name}</p>
                <div className="flex flex-col gap-1 sm:gap-0.75 md:gap-0.5">
                    <p className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium tracking-wider text-zinc-600 dark:text-zinc-300"><MdOutlineCake /> {formatDate(actor.birthday, lang)}{!actor.deathday && `, ${getAge(actor.birthday, actor.deathday)}`}</p>
                    {
                        actor.deathday && <p className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium tracking-wider text-zinc-600 dark:text-zinc-300"><TbGrave /> {`${formatDate(actor.deathday, lang)}, ${getAge(actor.birthday, actor.deathday)}`}</p>
                    }
                </div>
                <p className="flex gap-1 sm:gap-1.25 md:gap-1.5 text-xs sm:text-sm md:text-base font-medium tracking-wide leading-4.5 mt-1 text-zinc-600 dark:text-zinc-300">
                    <FaLocationDot className="size-2.5 sm:size-3 md:size-3.5 shrink-0 mt-1" />
                    <span>{actor.place_of_birth}</span>
                </p>
            </div>
            <ActorBadges list={actor.combined_credits.cast} />
        </div>
    )
}