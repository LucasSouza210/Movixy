import Skeleton from "../../../../../../components/ui/Skeleton";

export default function MetricCardSkeleton() {
    return (
        <Skeleton className="w-full flex flex-col gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 p-6 sm:p-7 md:p-8 lg:p-5 xl:p-6 2xl:p-7 rounded-[20px] sm:rounded-[22px] md:rounded-3xl lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px]">
            <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wide leading-none text-transparent">
                Title
            </p>
            <p className="font-semibold text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-base 2xl:text-lg tracking-wider leading-7.5 sm:leading-8.25 md:leading-9 lg:leading-6 xl:leading-6.75 2xl:leading-7.5 text-transparent">
                Info
            </p>
        </Skeleton>
    )
}