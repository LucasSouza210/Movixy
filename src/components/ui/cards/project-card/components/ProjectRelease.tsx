import { useFormattedDate } from "../../../../../hooks/useFormattedDate";

export default function ProjectRelease({ date }: { date: string | undefined }) {

    return (
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider leading-none text-zinc-500 dark:text-zinc-400">
            {useFormattedDate(date, { short: true })}
        </span>
    )
}