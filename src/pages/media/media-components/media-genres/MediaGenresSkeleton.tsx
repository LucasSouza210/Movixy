export default function MediaGenresSkeleton() {
    return (
        <div className="flex items-center">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <div className="flex items-center after:content-['•'] after:mx-2 sm:after:mx-2.5 md:after:mx-3 lg:after:mx-1.5 xl:after:mx-2 2xl:after:mx-2.5 last:after:hidden after:text-xs sm:after:text-sm md:after:text-base lg:after:text-[10px] xl:after:text-xs 2xl:after:text-sm after:text-zinc-300 dark:after:text-zinc-900" key={index}>
                        <span className="aspect-32/9 h-5 sm:h-6 md:h-7 lg:h-4.5 xl:h-5.25 2xl:h-6 rounded-md sm:rounded-[7px] md:rounded-lg skeleton" />
                    </div>
                ))
            }
        </div>
    )
}