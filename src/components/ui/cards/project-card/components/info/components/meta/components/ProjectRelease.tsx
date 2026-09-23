import { useFormattedDate } from "../../../../../../../../../hooks/useFormattedDate";

export default function ProjectRelease({ date }: { date: string | undefined }) {

    return (
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-none text-zinc-500 dark:text-zinc-400">
            {useFormattedDate(date, { short: true })}
        </span>
    )
}