import Skeleton from "../../../../../../../../components/ui/Skeleton";

export default function MediaTitleSkeleton () {
    return (
        <Skeleton className="w-fit font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl tracking-wider leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-7 xl:leading-8 2xl:leading-9 lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg text-transparent">
            MediaTitleHere (year)
        </Skeleton>
    )
}