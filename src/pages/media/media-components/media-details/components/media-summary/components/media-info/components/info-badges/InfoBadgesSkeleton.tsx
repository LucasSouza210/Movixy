import Skeleton from "../../../../../../../../../../components/ui/Skeleton";

export default function InfoBadgesSkeleton() {
    return (
        <div className="h-6 sm:h-6.75 md:h-7.5 lg:h-6 xl:h-7 2xl:h-8 flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton className="h-full min-w-6 sm:min-w-6.75 md:min-w-7.5 lg:min-w-6 xl:min-w-7 2xl:min-w-8 flex justify-center px-1.5 sm:px-1.75 md:px-2 lg:px-1.5 xl:px-1.75 2xl:px-2 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg text-transparent">
                        testText
                    </Skeleton>
                ))
            }
        </div>
    )
}