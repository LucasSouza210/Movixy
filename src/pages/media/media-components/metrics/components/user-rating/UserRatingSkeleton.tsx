import Skeleton from "../../../../../../components/ui/Skeleton";
import RatingBadge from "../../../../../../components/ui/shared/rating-panel/components/RatingBadge";

export default function UserRatingSkeleton() {
    return (
        <Skeleton className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5 lg:col-span-3 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 border rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px] border-transparent">
            <div className="flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 invisible">
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider text-title">
                    Only for UI
                </p>
                <p className="font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wider text-default">
                    Only for UI
                </p>
            </div>
            <div className="w-full flex items-center justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 invisible">
                <div className="w-full h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] overflow-hidden relative bg-elevated border-default" />
                <div className="flex items-center lg:gap-2 xl:gap-2.5 2xl:gap-3">
                    <RatingBadge rating={null} />
                </div>
            </div>
        </Skeleton>
    )
}