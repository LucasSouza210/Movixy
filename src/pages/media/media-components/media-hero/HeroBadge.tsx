export default function HeroBadge({ children, text, square }: { children?: React.ReactNode, text?: string, square?: boolean }) {
    return (
        <span className={`${square ? 'min-w-6 px-1.5 justify-center' : 'gap-1 sm:gap-1.25 md:gap-1.5 px-2 sm:px-2.25 md:px-2.5'} h-full flex items-center border rounded-lg md:rounded-[10px] backdrop-blur-[2px] font-medium text-[10px] sm:text-[11px] md:text-xs tracking-wide leading-none bg-zinc-900/50 border-zinc-800/50 text-white`}>
            {children && children}
            {text && text}
        </span>
    )
}