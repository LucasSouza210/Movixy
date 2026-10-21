import type { IconType } from "react-icons";

export default function SignWithButton({ icon, content, service }: { icon: IconType, content: string, service: () => void }) {

    const Icon = icon

    return (
        <button onClick={() => service()} className="w-full h-10 sm:h-11 md:h-12 lg:h-8 xl:h-9 2xl:h-10 flex items-center justify-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider border-action action-elevated text-action">
            <Icon className={`${content !== 'Google' && 'fill-zinc-500 dark:fill-zinc-300'}`} />
            {content}
        </button>
    )
}