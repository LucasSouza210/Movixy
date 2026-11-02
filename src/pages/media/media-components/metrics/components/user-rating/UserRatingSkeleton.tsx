import Skeleton from "../../../../../../components/ui/Skeleton";

export default function UserRatingSkeleton() {
    return (
        <Skeleton className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 lg:col-span-3 rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px] p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7">
            <div className="flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 invisible">
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider text-title">
                    Only for UI
                </p>
                <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-default">
                    Only for UI
                </p>
            </div>
            <div className="w-full flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 invisible">
                <div className="w-full h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] overflow-hidden relative bg-elevated border-default">
                    Only for UI
                </div>
                <span className="w-14 sm:w-17 md:w-20 lg:w-12 xl:w-15 2xl:w-18 h-full lg:h-fit flex items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 lg:py-1.5 xl:py-1.75 2xl:py-2 shrink-0 border rounded-full font-medium tracking-wider text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-sm bg-elevated border-default text-default">
                    <Skeleton className="size-2.5 sm:size-3 md:size-3.5 lg:size-2 xl:size-2.5 2xl:size-3 rounded-full" />
                    Only for UI
                </span>
            </div>
        </Skeleton>
    )
}