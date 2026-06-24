import { useContext } from "react"
import { Contexts } from "../../../../../contexts/ContextsProvider"
import type { Lang } from "../../../../../components/ui/lang-selection/DropdownButton"
import getAge from "../../../../../utils/tmdb/getAge";
import { MdOutlineCake } from "react-icons/md";
import { TbGrave } from "react-icons/tb";

export default function PersonVitalInfo({ birthday, deathday }: { birthday: string | null, deathday: string | null }) {

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
        <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-1 sm:gap-0.75 md:gap-0.5 lg:gap-4 xl:gap-5 2xl:gap-6">
            <p className="flex items-center gap-1 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider lg:whitespace-nowrap text-zinc-600 dark:text-zinc-300"><MdOutlineCake /> {formatDate(birthday, lang)}{!deathday && `, ${getAge(birthday, deathday)}`}</p>
            {
                deathday && <p className="flex items-center gap-1 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider lg:whitespace-nowrap text-zinc-600 dark:text-zinc-300"><TbGrave /> {`${formatDate(deathday, lang)}, ${getAge(birthday, deathday)}`}</p>
            }
        </div>
    )
}