export default function Drawer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full lg:w-fit sm:w-md md:w-134.5 h-auto min-h-100 lg:min-h-auto flex flex-col items-center gap-10 sm:gap-11 md:gap-12 lg:gap-0 rounded-t-[40px] sm:rounded-t-[42px] md:rounded-t-[44px] lg:rounded-4xl xl:rounded-[39px] 2xl:rounded-[46px] p-10 sm:p-11 md:p-12 lg:p-0 lg:border overflow-hidden bg-default lg:border-default">
            <span className="w-2/8 h-2 sm:h-2.25 md:h-2.5 lg:hidden rounded-full cursor-pointer bg-zinc-300 dark:bg-zinc-600" />
            {children}
        </div>
    )
}