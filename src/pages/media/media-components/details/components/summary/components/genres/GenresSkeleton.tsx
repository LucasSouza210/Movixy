export default function GenresSkeleton() {
    return (
        <div className="flex items-center flex-wrap gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <span className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.5 2xl:gap-2 text-xs sm:text-[13px] md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-none rounded-full px-4 md:px-5 lg:px-2.5 xl:px-3.25 2xl:px-4 py-3 sm:py-3.5 md:py-4 lg:py-2 xl:py-2.5 2xl:py-3 border text-transparent border-transparent skeleton" key={index}>
                        textForStyle
                    </span>
                ))
            }
        </div>
    )
}