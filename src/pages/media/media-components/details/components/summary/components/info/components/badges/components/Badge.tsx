import type { IconType } from "react-icons";

export default function Badge({ icon, text, square, isRating }: { icon?: IconType, text?: string, square?: boolean, isRating?: boolean }) {

    const Icon = icon

    return (
        <span className={`h-6 sm:h-7 md:h-8 lg:h-6 xl:h-7 2xl:h-8 flex items-center border rounded-[5px] sm:rounded-md md:rounded-[7px] lg:rounded-[5px] xl:rounded-md 2xl:rounded-[7px] backdrop-blur-[2px] font-medium text-[10px] sm:text-[11px] md:text-xs lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wide leading-none lg:bg-default lg:border-default lg:text-default bg-zinc-900/50 border-zinc-700/50 text-zinc-300 ${square ? 'min-w-6 sm:min-w-7 md:min-w-8 lg:min-w-6 xl:min-w-7 2xl:min-w-8 px-1.5 sm:px-1.75 md:px-2 lg:px-1.5 xl:px-1.75 2xl:px-2 justify-center' : 'gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2 sm:px-2.25 md:px-2.5 lg:px-2 xl:px-2.5 2xl:px-3'}`}>
            {
                Icon &&
                <Icon className={`size-2 sm:size-2.25 md:size-2.5 lg:size-2 xl:size-2.25 2xl:size-2.5 ${isRating ? 'fill-yellow-400' : 'fill-zinc-300 lg:fill-zinc-500 lg:dark:fill-zinc-300'}`} />
            }
            {text}
        </span>
    )
}