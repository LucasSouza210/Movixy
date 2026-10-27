import { useTranslate } from "../../../../../translations/Translations"
import { useFormattedDate } from "../../../../../hooks/useFormattedDate";
import { LuCalendar } from "react-icons/lu";
import Skeleton from "../../../../../components/ui/Skeleton";

export default function UserJoinDate({ date, loading }: { date: Date | null | undefined, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <Skeleton className="w-fit h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6 aspect-10/1 rounded-sm sm:rounded-[4.5px] md:rounded-[5px] lg:rounded-sm xl:rounded-[4.5px] 2xl:rounded-[5px]" />
            :
            <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-sm sm:text-[15px] md:text-base lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider text-default">
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