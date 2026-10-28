import Skeleton from "../../Skeleton"
import ListPreviewSkeleton from "./components/list-preview/ListPreviewSkeleton"

export default function ListCardSkeleton() {
    return (
        <Skeleton className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 border rounded-3xl sm:rounded-[30px] md:rounded-[36px] lg:rounded-3xl xl:rounded-[30px] 2xl:rounded-[36px] p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-8 border-transparent">
            {/* ListInfo */}
            <div className="w-full flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                <div className="w-full flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.5 xl:gap-0.75 2xl:gap-1">
                    <p className="text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider line-clamp-1 text-transparent">
                        OnlyForUI
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-5 sm:leading-6 md:leading-7 lg:leading-4 xl:leading-5 2xl:leading-6 line-clamp-2 text-transparent">
                        OnlyForUI
                    </p>
                </div>
                <span className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 shrink-0 rounded-full skeleton" />
            </div>

            {/* ListPreview */}
            <ListPreviewSkeleton />

            {/* ListCardFooter */}
            <div className="w-full flex items-center justify-between pt-3 sm:pt-3.5 md:pt-4 lg:pt-3 xl:pt-3.5 2xl:pt-4 border-t border-transparent">
                <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-transparent">
                    OnlyForUI
                </p>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                    <span className="block w-12 sm:w-13 md:w-14 lg:w-12 xl:w-13 2xl:w-14 h-7 sm:h-8 md:h-9 lg:h-7 xl:h-8 2xl:h-9 rounded-full skeleton" />
                    <span className="size-8 sm:size-9.5 md:size-11 lg:size-7 xl:size-8 2xl:size-9 rounded-full skeleton" />
                </div>
            </div>
        </Skeleton>
    )
}