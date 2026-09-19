import Skeleton from "../../../../../../../../components/ui/Skeleton";

export default function MediaOverviewSkeleton() {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 mb-1 sm:mb-1.25 md:mb-1.5 lg:mb-1 xl:mb-1.5 2xl:mb-2">
            <Skeleton className="block w-2/5 lg:w-1/4 h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.5 2xl:h-6.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md" />
            <Skeleton className="block h-4.5 sm:h-5.25 md:h-6 lg:h-3.5 xl:h-4.6875 2xl:h-5.25 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-[3px] xl:rounded-md 2xl:rounded-[5px]" containerClassName="w-full lg:w-9/10 gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75" lines={2} />
        </div>
    )
}