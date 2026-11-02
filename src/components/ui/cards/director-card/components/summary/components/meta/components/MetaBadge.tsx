import type { IconType } from "react-icons";

export default function MetaBadge({ info, icon, rating }: { info: string | number, icon: IconType, rating: boolean }) {

    const Icon = icon

    return (
        <span className="h-6 sm:h-7.25 md:h-8.5 lg:h-5 xl:h-6.25 2xl:h-7.5 flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 border rounded-full text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-none px-2 sm:px-2.5 md:px-3 lg:px-1.5 xl:px-2 2xl:px-2.5 bg-elevated border-default text-default">
            <Icon className={`size-2 sm:size-2.25 md:size-2.5 lg:size-1.75 xl:size-2 2xl:size-2.25 ${rating && 'text-yellow-500'}`} />
            {info}
        </span>
    )
}