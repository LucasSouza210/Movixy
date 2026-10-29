import Skeleton from "../../Skeleton";

export default function PersonCardSkeleton() {
    return (
        <div className="w-full flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <Skeleton className="w-full aspect-square rounded-full border border-transparent" />
            <div className="w-full flex flex-col items-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                <div className="w-full flex flex-col items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                    <Skeleton className="w-9/10 h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.75 2xl:h-6.5 rounded-[5px] sm:rounded-[5.5px] md:rounded-md lg:rounded-[5px] xl:rounded-[5.5px] 2xl:rounded-md" />
                    <Skeleton className="w-9/10 h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.75 2xl:h-6.5 rounded-[5px] sm:rounded-[5.5px] md:rounded-md lg:rounded-[5px] xl:rounded-[5.5px] 2xl:rounded-md" />
                </div>
                <Skeleton className="w-7/10 h-4 sm:h-4.5 md:h-5 lg:h-4 xl:h-4.5 2xl:h-5 rounded-sm sm:rounded-[4.5px] md:rounded-[5px] lg:rounded-sm xl:rounded-[4.5px] 2xl:rounded-[5px]" />
            </div>
        </div>
    )
}