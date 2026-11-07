import Skeleton from "../../../../components/ui/Skeleton";
import RatingBadge from "../../../../components/ui/shared/rating-panel/components/RatingBadge";

const overviewPlaceholder = "Only for UI ".repeat(20)

export default function SeasonsExplorerSkeleton() {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
                <Skeleton className="w-1/3 h-5.5 sm:h-6.25 md:h-7 lg:h-5.5 xl:h-6.25 2xl:h-7 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg" />
                <div className="flex flex-col gap-2.5 sm:gap-3.25 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4">
                    <Skeleton className="w-full h-12 sm:h-13 md:h-14 lg:h-12 xl:h-13 2xl:h-14 rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl" />
                    <Skeleton className="w-3/7 h-4.5 sm:h-5 md:h-5.5 lg:h-4 xl:h-4.5 2xl:h-5 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-[3px] xl:rounded-sm 2xl:rounded-[5px]" />
                </div>
                <Skeleton className="w-full h-16 sm:h-18 md:h-20 lg:h-14 xl:h-16 2xl:h-18 rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-xl xl:rounded-[13px] 2xl:rounded-[14px]" />
            </div>
            <Skeleton className="w-full lg:h-auto flex flex-col lg:flex-row lg:gap-8 border lg:border-none border-transparent rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] relative overflow-hidden">
                <span className="absolute inset-0 z-10 hidden lg:block lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] lg:border border-transparent" />
                <div className="w-full aspect-video flex items-center justify-center lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border-b lg:border-none border-transparent invisible" />
                <div className="flex-1 lg:inset-0 flex flex-col lg:justify-between relative lg:z-20 lg:p-8 xl:p-9 2xl:p-10 lg:gap-3 lg:absolute z-20 invisible">
                    <div className="w-full h-full lg:h-auto flex flex-col justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 p-6 sm:p-7 md:p-8 lg:p-0">
                        <div className="w-full max-w-max flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
                            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide sm:tracking-wider leading-none">
                                Only for UI
                            </p>
                            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide sm:tracking-wider leading-none">
                                0.0
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                            <p className="lg:max-w-6/10 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-6.5 xl:leading-7.25 2xl:leading-8 text-wrap">
                                Only for UI
                            </p>
                            <p className="relative lg:max-w-6/10 text-sm sm:text-base md:text-lg lg:text-xs 2xl:text-base font-medium tracking-wider leading-5.5 sm:leading-6.5 md:leading-7.5 lg:leading-5 2xl:leading-6">
                                <span className="line-clamp-3">
                                    {overviewPlaceholder}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center p-6 sm:p-7 md:p-8 lg:p-0 gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 relative border-t lg:border-none shrink-0 border-transparent">
                        <div className="flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                            <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider">
                                Only for UI
                            </p>
                            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider">
                                Only for UI
                            </p>
                        </div>
                        <div className="w-full flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                            <div className="w-full lg:w-3/5 h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] border-transparent" />
                            <div className="flex items-center lg:gap-2 xl:gap-2.5 2xl:gap-3">
                                <RatingBadge rating={null} />
                            </div>
                        </div>
                    </div>
                </div>
            </Skeleton>
        </div>
    )
}