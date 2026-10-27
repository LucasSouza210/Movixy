export default function MediaCardSkeleton() {
    return (
        <div className="size-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 shrink-0">
            <span className="w-full aspect-2/3 rounded-[20px] sm:rounded-[25px] md:rounded-[28px] lg:rounded-2xl xl:rounded-[19px] 2xl:rounded-[22px] skeleton" />
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                    <span className="w-full h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.25 2xl:h-6 rounded-[5px] sm:rounded-md md:rounded-[7px] lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md skeleton" />
                    <span className="w-full h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.25 2xl:h-6 rounded-[5px] sm:rounded-md md:rounded-[7px] lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md skeleton" />
                </div>
                <span className="h-4.5 sm:h-5.5 md:h-6.5 lg:h-3.5 xl:h-4 2xl:h-4.5 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-[3px] xl:rounded-sm 2xl:rounded-[5px] skeleton" />
            </div>
        </div>
    )
}