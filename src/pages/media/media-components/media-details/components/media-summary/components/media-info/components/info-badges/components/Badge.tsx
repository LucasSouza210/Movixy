export default function Badge({ children, text, square }: { children?: React.ReactNode, text?: string, square?: boolean }) {
    return (
        <span className={`${square ? 'min-w-6 sm:min-w-6.75 md:min-w-7.5 lg:min-w-6 xl:min-w-7 2xl:min-w-8 px-1.5 sm:px-1.75 md:px-2 lg:px-1.5 xl:px-1.75 2xl:px-2 justify-center' : 'gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2 sm:px-2.25 md:px-2.5 lg:px-2 xl:px-2.5 2xl:px-3'} h-full flex items-center border rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg backdrop-blur-[2px] font-medium text-[10px] sm:text-[11px] md:text-xs lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wide leading-none lg:bg-default lg:border-default lg:text-default bg-zinc-900/50 border-zinc-700/50 text-white`}>
            {children && children}
            {text && text}
        </span>
    )
}