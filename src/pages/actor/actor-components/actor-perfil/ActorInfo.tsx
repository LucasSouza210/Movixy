import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import type { ActorDetails } from "../../../../types/tmdb";
import type { Lang } from "../../../../components/ui/lang-selection/DropdownButton";
import getAge from "../../../../utils/tmdb/getAge";
import { MdOutlineCake } from "react-icons/md";
import { TbGrave } from "react-icons/tb";

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
        <div className="flex flex-col gap-1.5 pt-4">
            <p className="text-base font-semibold tracking-wider leading-5.5 text-black dark:text-white">{actor.name}</p>
            <div className="flex flex-col gap-0.5">
                <p className="flex items-center gap-1 text-sm font-medium tracking-wider text-zinc-600 dark:text-zinc-300"><MdOutlineCake /> {formatDate(actor.birthday, lang)}{!actor.deathday && `, ${getAge(actor.birthday, actor.deathday)}`}</p>
                {
                    actor.deathday && <p className="flex items-center gap-1 text-sm font-medium tracking-wider text-zinc-600 dark:text-zinc-300"><TbGrave /> {`${formatDate(actor.deathday, lang)}, ${getAge(actor.birthday, actor.deathday)}`}</p>
                }
            </div>
        </div>
    )
}