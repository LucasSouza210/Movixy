import Skeleton from "../../../../../components/ui/Skeleton"

export default function ListCardSkeleton() {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 border border-default rounded-4xl sm:rounded-[36px] md:rounded-[40px] lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 action-default">

            {/* ListInfo */}
            <div className="flex flex-col gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
                <Skeleton className="h-5 sm:h-5.5 md:h-6 lg:h-4.5 xl:h-5 2xl:h-5.5 w-2/5 rounded-md" />
                <Skeleton className="h-3.5 sm:h-4 md:h-4.5 lg:h-3 xl:h-3.5 2xl:h-4 rounded-md" containerClassName="w-full gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5" lines={2}/>
            </div>

            {/* ListPreview / ListEmpty area */}
            <Skeleton className="w-full aspect-7/3 rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px]" />

            {/* ListCardFooter */}
            <div className="w-full flex items-center justify-between pt-4 sm:pt-5 md:pt-6 lg:pt-4 xl:pt-5 2xl:pt-6 border-t border-default">
                <Skeleton className="h-6.5 sm:h-7 md:h-7.5 lg:h-6.25 xl:h-6.5 2xl:h-7 w-14 sm:w-16 rounded-full" />
                <Skeleton className="h-4 sm:h-4.5 md:h-5 lg:h-4 xl:h-4.25 2xl:h-4.5 w-28 sm:w-32 rounded-md" />
            </div>

        </div>
    )
}