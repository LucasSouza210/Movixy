import { FaPlus } from "react-icons/fa6";

export default function MoreItems({ length }: { length: number | undefined | null }) {
    return (
        <div className="w-full aspect-2/3 flex items-center justify-center border border-default rounded-[10px] sm:rounded-xl md:rounded-[14px] lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
            <p className="flex items-center gap-0.5 sm:gap-0.75 md:gap-1 lg:gap-0.5 text-sm sm:text-base md:text-lg lg:text-sm font-semibold tracking-wider leading-none text-zinc-600 dark:text-zinc-300">
                <FaPlus className="size-2.5 sm:gap-2.75 md:size-3 lg:size-2.5"/>
                {`${length ? (length - 3) : 1}`}
            </p>
        </div>
    )
}