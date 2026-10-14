import Skeleton from "../../../../../../../../../../components/ui/Skeleton";

export default function InfoBadgesSkeleton() {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton className="w-fit h-6 sm:h-6.75 md:h-7.5 lg:h-6 xl:h-7 2xl:h-8 aspect-2/1 rounded-[5px] sm:rounded-md md:rounded-[7px] lg:rounded-[5px] xl:rounded-md 2xl:rounded-[7px]" key={index} />
                ))
            }
        </div>
    )
}