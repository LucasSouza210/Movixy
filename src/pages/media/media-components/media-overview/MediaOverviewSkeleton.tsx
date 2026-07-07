export default function MediaOverviewSkeleton() {
    return (
        <div className="w-full flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5">
            <span className="w-2/5 lg:w-1/4 h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.5 2xl:h-6.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
            <span className="w-full lg:w-4/5 h-20 sm:h-22 md:h-24 lg:h-16 xl:h-18 2xl:h-20 rounded-2xl sm:rounded-[20px] md:rounded-3xl lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] lg:mb-2 xl:mb-2.5 2xl:mb-3 skeleton" />
        </div>
    )
}