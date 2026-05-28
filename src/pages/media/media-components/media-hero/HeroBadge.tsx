export default function HeroBadge({ children, text, square }: { children?: React.ReactNode, text?: string, square?: boolean }) {
    return (
        <span className={`${square ? 'min-w-6 sm:min-w-6.75 md:min-w-7.5 lg:min-w-6 xl:min-w-7 2xl:min-w-8 px-1.5 sm:px-1.75 md:px-2 lg:px-1.5 xl:px-1.75 2xl:px-2 justify-center' : 'gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 2xl:gap-1 px-2 sm:px-2.25 md:px-2.5 lg:px-2 xl:px-2.5 2xl:px-3'} h-full flex items-center border rounded-lg md:rounded-[10px] lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl backdrop-blur-[2px] font-medium text-[10px] sm:text-[11px] md:text-xs lg:text-[8px] xl:text-[10px] 2xl:text-xs tracking-wide leading-none bg-zinc-900/50 lg:bg-white lg:dark:bg-zinc-950/50 border-zinc-800/50 lg:border-zinc-200 lg:dark:border-zinc-800 text-white lg:text-zinc-500 lg:dark:text-zinc-300`}>
            {children && children}
            {text && text}
        </span>
    )
}