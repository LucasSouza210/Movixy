export default function HeroBadge({ children, text, square }: { children?: React.ReactNode, text?: string, square?: boolean }) {
    return (
        <span className={`${square ? 'min-w-6 sm:min-w-6.75 md:min-w-7.5 px-1.5 sm:px-1.75 md:px-2 justify-center' : 'gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 px-2 sm:px-2.25 md:px-2.5'} h-full flex items-center border rounded-lg md:rounded-[10px] backdrop-blur-[2px] font-medium text-[10px] sm:text-[11px] md:text-xs lg:text-[10px] tracking-wide leading-none bg-zinc-900/50 lg:bg-white lg:dark:bg-zinc-950/50 border-zinc-800/50 lg:border-zinc-200 lg:dark:border-zinc-800 text-white lg:text-zinc-500 lg:dark:text-zinc-300`}>
            {children && children}
            {text && text}
        </span>
    )
}