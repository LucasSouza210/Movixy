export default function Year({ year }: { year: string }) {
    return (
        <span className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-widest leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-4 xl:leading-4.5 2xl:leading-5 text-default">
            {year}
        </span>
    )
}