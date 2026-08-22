import type { IconType } from "react-icons";

export default function PersonBadge({ text, icon, rating }: { text: string | number, icon: IconType, rating: boolean }) {

    const Icon = icon

    return (
        <span className="w-fit h-7 sm:h-8.5 md:h-10 lg:h-7 xl:h-8 2xl:h-9 flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2.5 sm:px-3.25 md:px-4 lg:px-2.5 xl:px-3.25 2xl:px-4 text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide leading-none border rounded-full bg-default border-default text-zinc-600 dark:text-zinc-200">
            <Icon className={`size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-3 2xl:size-3.5 ${rating && 'fill-yellow-400'}`} />
            {text}
        </span>
    )
}