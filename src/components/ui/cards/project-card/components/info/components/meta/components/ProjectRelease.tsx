import { useFormattedDate } from "../../../../../../../../../hooks/useFormattedDate";

export default function ProjectRelease({ date }: { date: string | undefined }) {

    return (
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-none text-default">
            {useFormattedDate(date, { short: true })}
        </span>
    )
}