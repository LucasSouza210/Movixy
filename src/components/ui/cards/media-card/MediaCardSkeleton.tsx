export default function MediaCardSkeleton() {
    return (
        <div className="size-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 shrink-0">
            <span className="w-full aspect-2/3 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl skeleton" />
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5">
                    <span className="w-full h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.25 2xl:h-6 rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                    <span className="w-full h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.25 2xl:h-6 rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                </div>
                <span className="h-4.5 sm:h-5.5 md:h-6.5 lg:h-3.5 xl:h-4 2xl:h-4.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md skeleton" />
            </div>
        </div>
    )
}