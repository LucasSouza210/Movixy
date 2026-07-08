export default function ProjectsListSkeleton() {
    return (
        <div className="size-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-7">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <span className="size-full rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-3xl xl:rounded-[28px] 2xl:rounded-4xl skeleton" key={index} />
                ))
            }
        </div>
    )
}