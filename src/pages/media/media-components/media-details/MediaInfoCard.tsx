export default function MediaInfoCard({ title, content }: { title: string | undefined, content: string | number | undefined }) {
    return (
        <div className="w-full h-24 sm:h-27 md:h-30 lg:h-20 flex flex-col justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-2 px-6 sm:px-7 md:px-8 lg:px-6 rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl border bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800/80">
            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] tracking-wide leading-none text-zinc-500 dark:text-zinc-400">{title}</p>
            <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-xs tracking-wider leading-none text-zinc-900 dark:text-zinc-100">{content}</p>
        </div>
    )
}