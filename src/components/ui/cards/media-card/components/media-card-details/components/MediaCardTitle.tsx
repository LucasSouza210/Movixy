export default function MediaCardTitle({ title, onlyYear, year }: { title: string, onlyYear: boolean | undefined, year: string }) {
    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider md:tracking-widest leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-5.5 xl:leading-6.5 2xl:leading-7.5 line-clamp-2 text-title">
            {title}
            {
                onlyYear &&
                <span className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-widest leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-4 xl:leading-4.5 2xl:leading-5 text-default">
                    {year}
                </span>
            }
        </p>
    )
}