import Skeleton from "../../../../Skeleton";

export default function ListPreviewSkeleton() {
    return (
        <div className="w-full grid grid-cols-4 items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton className="w-full aspect-2/3 rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] border border-transparent" key={index} />
                ))
            }
        </div>
    )
}