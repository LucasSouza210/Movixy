import { useFormattedDate } from "../../../../../../../hooks/utils/useFormattedDate"
import { LuCalendarClock, LuCalendarSync } from "react-icons/lu"

const editTolerance = 1000

export default function ListUpdatedAt({ createdAt, updatedAt }: { createdAt: string, updatedAt: string }) {

    const edited = !!updatedAt && new Date(updatedAt).getTime() - new Date(createdAt).getTime() > editTolerance

    const formattedDate = useFormattedDate(edited ? updatedAt : createdAt, { short: true })

    const Icon = edited ? LuCalendarSync : LuCalendarClock

    return (
        <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-default">
            <Icon className="size-3.5 sm:size-3.75 md:size-4 lg:size-3.5 xl:size-3.75 2xl:size-4" />
            {formattedDate}
        </p>
    )
}