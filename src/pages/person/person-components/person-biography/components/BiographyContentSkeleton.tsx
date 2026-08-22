export default function BiographyContentSkeleton() {
    return (
        <div className="w-full flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 mt-1 sm:mt-1.5 md:mt-2 lg:mt-1.5 xl:mt-1.75 2xl:mt-2">
            <span className="w-full aspect-8/1 lg:aspect-12/1 rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-[11px] 2xl:rounded-xl skeleton" />
            <span className="w-fit h-5 sm:h-5.75 md:h-6.5 lg:h-3.5 xl:h-4.75 2xl:h-5.5 aspect-5/1 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md skeleton" />
        </div>
    )
}