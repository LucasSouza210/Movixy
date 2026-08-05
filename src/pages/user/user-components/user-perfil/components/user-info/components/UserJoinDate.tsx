import { useTranslate } from "../../../../../../../translations/Translations"
import { useFormattedDate } from "../../../../../../../hooks/useFormattedDate";
import { LuCalendar } from "react-icons/lu";

export default function UserJoinDate({ date }: { date: Date | null | undefined }) {

    const { line } = useTranslate()


    return (
        <p className="flex items-center gap-1.5 text-sm font-medium tracking-wider leading-none text-zinc-500 dark:text-zinc-400">
            <LuCalendar />
            {
                date &&
                `${line('joinedIn')} ${useFormattedDate(date.toISOString(), { monthYear: true })}`
            }
        </p>
    )
}