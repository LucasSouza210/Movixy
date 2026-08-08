import { useTranslate } from "../../../../../../../translations/Translations"
import { useFormattedDate } from "../../../../../../../hooks/useFormattedDate";
import { LuCalendar } from "react-icons/lu";

export default function UserJoinDate({ date }: { date: Date | null | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-zinc-500 dark:text-zinc-400">
            <LuCalendar />
            {
                date ?
                    `${line('joinedIn')} ${useFormattedDate(date.toISOString(), { monthYear: true })}`
                    :
                    line('noJoinDate')
            }
        </p>
    )
}