import type { MouseEventHandler } from "react";

export default function HeaderButton({ className, menu, onClick, children }: { className?: string, menu?: boolean, onClick: MouseEventHandler, children: React.ReactNode }) {
    return (
        <button className={`flex items-center justify-center border shrink-0 border-action ${menu ? 'size-7 sm:size-7.5 md:size-8 rounded-[7px] sm:rounded-lg md:rounded-[9px] cursor-pointer transition-all duration-200 ease-in-out bg-zinc-100/40 dark:bg-zinc-900/40 hover:bg-white/60 dark:hover:bg-zinc-900/60 active:bg-white/90 dark:active:bg-zinc-900/90' : 'h-10 sm:h-11 md:h-12 lg:h-7 xl:h-8 2xl:h-9 font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wider leading-none uppercase rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[7px] xl:rounded-lg 2xl:rounded-[9px] action-default text-action lg:bg-zinc-100/40 lg:dark:bg-zinc-900/40 lg:hover:bg-white/60 lg:dark:hover:bg-zinc-900/60 lg:active:bg-white/90 lg:dark:active:bg-zinc-900/90 lg:border-zinc-400/40 lg:dark:border-zinc-700/40'} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}