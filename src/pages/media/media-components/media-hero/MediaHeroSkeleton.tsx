export default function MediaHeroSkeleton() {
    return (
        <div className="w-full flex lg:gap-7 xl:gap-7.5 2xl:gap-8">
            <span className="w-full aspect-video lg:aspect-auto overflow-hidden rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-none lg:hidden skeleton" />
            <span className="w-3/10 aspect-2/3 hidden lg:block lg:rounded-4xl xl:rounded-[39px] 2xl:rounded-[46px] shrink-0 skeleton" />
            <div className="lg:w-full hidden lg:flex flex-col lg:gap-4 xl:gap-5 2xl:gap-6">
                <div className="w-full flex flex-col lg:gap-2 xl:gap-2.5 2xl:gap-3">
                    <span className="w-2/6 lg:h-5 xl:h-5.75 2xl:h-6.5 lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] skeleton" />
                    <span className="w-1/2 lg:h-6 xl:h-7 2xl:h-8 lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl skeleton" />
                </div>
                <span className="w-2/3 h-2/5 lg:rounded-2xl xl:rounded-[20px] 2xl:rounded-3xl skeleton" />
                <span className="w-2/3 lg:h-8 xl:h-10 2xl:h-12 rounded-lg xl:rounded-[11px] 2xl:rounded-[14px] skeleton" />
            </div>
        </div>
    )
}