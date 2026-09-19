import Skeleton from "../../../../components/ui/Skeleton";

export default function MediaOverviewSkeleton() {
    return (
        <div className="w-full flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5">
            <Skeleton className="block w-2/5 lg:w-1/4 h-5.5 sm:h-6.5 md:h-7.5 lg:h-4.5 xl:h-5.5 2xl:h-6.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg" />
            <Skeleton className="block h-4.5 sm:h-5.25 md:h-6 lg:h-4.125 xl:h-4.6875 2xl:h-5.25 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-[3px] xl:rounded-md 2xl:rounded-[5px]" containerClassName="w-full lg:w-9/10 gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25" lines={2} />
        </div>
    )
}