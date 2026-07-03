export default function SeasonsExplorerSkeleton() {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
                <span className="w-1/3 h-5.5 sm:h-6.25 md:h-7 lg:h-5.5 xl:h-6.25 2xl:h-7 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                <div className="flex flex-col gap-2.5 sm:gap-3.25 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4">
                    <span className="w-full h-12 sm:h-13 md:h-14 lg:h-12 xl:h-13 2xl:h-14 rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-xl xl:rounded-[14px] 2xl:rounded-2xl skeleton" />
                    <span className="w-3/7 h-4.5 sm:h-5 md:5.5 lg:h-4 xl:h-4.5 2xl:h-5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-[5px] xl:rounded-md 2xl:rounded-[7px] skeleton" />
                </div>
                <span className="w-full h-16 sm:h-18 md:h-20 lg:h-14 xl:h-16 2xl:h-18 rounded-2xl sm:rounded-[18px] md:rounded-[20px] lg:rounded-2xl xl:rounded-[18px] 2xl:rounded-[20px] skeleton" />
            </div>
            <span className="w-full h-120 sm:h-136 md:h-158 lg:h-auto lg:aspect-video rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] skeleton" />
        </div>
    )
}