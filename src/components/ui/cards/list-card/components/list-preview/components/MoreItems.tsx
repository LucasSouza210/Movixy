export default function MoreItems({ length }: { length: number | undefined | null }) {
    return (
        <div className="w-full aspect-2/3 flex items-center justify-center border border-default rounded-[10px] overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
            <p className="text-sm font-semibold tracking-wider text-zinc-600 dark:text-zinc-300">
                {`+${length ? (length - 3) : 1}`}
            </p>
        </div>
    )
}