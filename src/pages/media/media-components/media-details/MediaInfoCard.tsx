export default function MediaInfoCard({ title, content }: { title: string | undefined, content: string | number | undefined }) {
    return (
        <div className="w-full h-24 flex flex-col justify-center gap-1.5 px-6 rounded-3xl border bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
            <p className="font-medium text-xs tracking-wide leading-none text-zinc-500 dark:text-zinc-400">{title}</p>
            <p className="font-semibold text-base tracking-wider leading-none text-zinc-900 dark:text-zinc-100">{content}</p>
        </div>
    )
}