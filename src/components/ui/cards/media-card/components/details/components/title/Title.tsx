import Year from "./components/Year";

export default function Title({ title, onlyYear, year }: { title: string, onlyYear: boolean | undefined, year: string }) {
    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider md:tracking-widest leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-5.5 xl:leading-6.5 2xl:leading-7.5 line-clamp-2 text-title">
            {title}
            {
                onlyYear &&
                <Year year={year} />
            }
        </p>
    )
}