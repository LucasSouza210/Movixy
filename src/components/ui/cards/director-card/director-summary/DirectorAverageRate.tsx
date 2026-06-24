import { FaStar } from "react-icons/fa";

export default function DirectorAverageRate({rate}: {rate: string}) {
    return (
        <span className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-0.75 xl:gap-1 2xl:gap-1.25 font-medium text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wide text-zinc-600 dark:text-zinc-300">
            <FaStar className="size-2.5 sm:size-2.75 md:size-3 lg:size-2 xl:size-2.25 2xl:size-2.5 fill-yellow-300" />
            <p className="leading-none">
                {rate}
            </p>
        </span>
    )
}