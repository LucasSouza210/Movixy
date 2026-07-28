export default function CastCardSkeleton() {
    return (
        <div className="w-full flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4">
            <span className="w-full aspect-square rounded-full skeleton" />
            <div className="w-full flex flex-col items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                <div className="w-full flex flex-col items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                    <span className="w-9/10 h-4.5 sm:h-5.25 md:h-6 lg:h-4.5 xl:h-5 2xl:h-6 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                    <span className="w-7/10 h-4.5 sm:h-5.25 md:h-6 lg:h-4.5 xl:h-5 2xl:h-6 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                </div>
                <div className="w-full flex flex-col items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
                    <span className="w-8/10 h-4 sm:h-5 md:h-6 lg:h-4 xl:h-4.75 2xl:h-5.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                    <span className="w-6/10 h-4 sm:h-5 md:h-6 lg:h-4 xl:h-4.75 2xl:h-5.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                </div>
            </div>
        </div>
    )
}