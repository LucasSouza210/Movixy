export default function RatingBadge({ active }: { active: number | null }) {
    return (
        <span className="aspect-14/5 flex items-center justify-center py-2 sm:py-2.5 md:py-3 lg:py-2 xl:py-2.5 2xl:py-3 text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium md:tracking-wide leading-none border rounded-full shrink-0 border-default card-badge lg:bg-zinc-900/50 lg:border-zinc-700/60 text-default lg:text-zinc-300">
            {typeof active === 'number' ? active + 1 : 0} / 10
        </span>
    )
}