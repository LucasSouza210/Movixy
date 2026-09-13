import Skeleton from "../../../../../../components/ui/Skeleton";

export default function ListInfoSkeleton() {
    return (
        <div className="flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Skeleton className="h-6.5 sm:h-7 md:h-7.5 lg:h-5.5 xl:h-6.5 2xl:h-6 w-fit aspect-7/1 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md" />
            <Skeleton className="h-5 sm:h-5.5 md:h-6 lg:h-4.5 xl:h-5 2xl:h-5.5 w-fit rounded-[5px] aspect-13/1 sm:rounded-md md:rounded-[7px] lg:rounded-[3px] xl:rounded-sm 2xl:rounded-[5px]" />
        </div>
    )
}