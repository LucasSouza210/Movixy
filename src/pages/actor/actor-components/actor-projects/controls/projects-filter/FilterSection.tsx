export default function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.75 md:gap-4.5">
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wider leading-none text-black dark:text-white">{title}</p>
            {children}
        </div>
    )
}