import { useFormattedDate } from "../../../../../../../../../hooks/utils/useFormattedDate";

export default function Release({ date }: { date: string | undefined }) {

    return (
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider text-default">
            {
                useFormattedDate(date, { short: true })
            }
        </span>
    )
}