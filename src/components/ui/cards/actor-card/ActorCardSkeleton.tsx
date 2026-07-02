export default function ActorCardSkeleton() {
    return (
        <div className="w-full flex flex-col items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-4.5 2xl:gap-5">
            <span className="w-full aspect-square rounded-full skeleton" />
            <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <div className="w-full flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5">
                    <span className="w-9/10 h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.75 2xl:h-6.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                    <span className="w-9/10 h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.75 2xl:h-6.5 rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg skeleton" />
                </div>
                <span className="w-7/10 h-4 sm:h-4.5 md:h-5 lg:h-4 xl:h-4.5 2xl:h-5 rounded-sm sm:rounded-[5px] md:rounded-md lg:rounded-sm xl:rounded-[5px] 2xl:rounded-md skeleton" />
            </div>
        </div>
    )
}