export default function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.75 md:gap-4.5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-none text-black dark:text-white">{title}</p>
            {children}
        </div>
    )
}