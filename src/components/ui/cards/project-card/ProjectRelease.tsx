import { useFormattedDate } from "../../../../hooks/useFormattedDate";

export default function ProjectRelease({ date }: { date: string | undefined }) {

    return (
        <span className="absolute bottom-0 right-0 text-[10px] sm:text-xs md:text-sm lg:text-[10px] font-medium tracking-wide md:tracking-wider leading-none text-zinc-500 dark:text-zinc-400">
            {useFormattedDate(date)}
        </span>
    )
}