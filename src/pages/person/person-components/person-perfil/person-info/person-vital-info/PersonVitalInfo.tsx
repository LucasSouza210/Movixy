import { useTranslate } from "../../../../../../translations/Translations";
import type { Lang } from "../../../../../../components/ui/buttons/lang-button/components/DropdownButton";
import getAge from "../../../../../../utils/tmdb/getAge";
import useLang from "../../../../../../hooks/useLang";
import PersonVitalInfoSkeleton from "./PersonVitalInfoSkeleton";
import { MdOutlineCake } from "react-icons/md";
import { TbGrave } from "react-icons/tb";

export default function PersonVitalInfo({ birthday, deathday, loading }: { birthday: string | null | undefined, deathday: string | null | undefined, loading: boolean }) {

    const lang = useLang()

    const { line } = useTranslate()

    function formatDate(date: string | null | undefined, locale: Lang) {
        if (!date || !locale) return ""

        const [year, month, day] = date.split("-")

        switch (locale) {
            case "en": return `${month}/${day}/${year}`
            default: return `${day}/${month}/${year}`
        }
    }

    const age = getAge(birthday, deathday)

    return (
        loading ? <PersonVitalInfoSkeleton />
            :
            <div className="flex flex-col lg:items-end gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                <p className="flex items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider lg:whitespace-nowrap leading-none text-zinc-600 dark:text-zinc-300">
                    <MdOutlineCake className="shrink-0" />
                    {birthday ? formatDate(birthday, lang) : line('unknownBirthDate')}{!deathday && birthday && `, ${age ?? line('unknownAge')}`}
                </p>
                {
                    deathday && <p className="flex items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider lg:whitespace-nowrap leading-none text-zinc-600 dark:text-zinc-300">
                        <TbGrave />
                        {`${deathday ? formatDate(deathday, lang) : line('unknownDeathDate')}, ${age ?? line('unknownAge')}`}
                    </p>
                }
            </div>
    )
}