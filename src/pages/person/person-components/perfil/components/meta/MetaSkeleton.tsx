import Skeleton from "../../../../../../components/ui/Skeleton";

export default function MetaSkeleton() {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
            <Skeleton className="size-8 sm:size-10 md:size-12 lg:size-8 xl:size-9.5 2xl:size-11 rounded-full border border-transparent" />
            <Skeleton className="aspect-video h-7 sm:h-8.5 md:h-10 lg:h-7 xl:h-8 2xl:h-9 rounded-full border border-transparent" />
            <Skeleton className="aspect-video h-7 sm:h-8.5 md:h-10 lg:h-7 xl:h-8 2xl:h-9 rounded-full border border-transparent" />
        </div>
    )
}