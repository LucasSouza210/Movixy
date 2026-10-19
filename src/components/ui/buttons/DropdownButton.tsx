import type { MouseEventHandler } from "react";

export default function DropdownButton({ children, onClick, custom }: { children: React.ReactNode, onClick: MouseEventHandler, custom?: string }) {
    return (
        <button className={`min-w-full h-12 sm:h-13 md:h-14 lg:h-10 xl:h-11 2xl:h-12 flex items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-3.5 2xl:px-4 border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] font-medium text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm tracking-wider action-elevated border-action ${custom ?? 'text-action'}`} onClick={onClick}>
            {children}
        </button>
    )
}