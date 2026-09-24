import Skeleton from "../../../../../../../../components/ui/Skeleton";

export default function BioSkeleton() {
    return (
        <Skeleton className="h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md" containerClassName="gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2" lines={2} />
    )
}