export default function ProjectRelease({ date }: { date: string }) {
    return (
        <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
            {date}
        </span>
    )
}