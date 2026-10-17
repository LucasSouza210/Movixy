import { LuFilm } from "react-icons/lu";

export default function ListLength({ length }: { length: number | undefined | null }) {
    return (
        <span className="flex items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-none px-2.5 sm:px-3 md:px-3.5 lg:px-2.5 xl:px-3 2xl:px-3.5 py-1.75 sm:py-2 md:py-2.25 lg:py-1.75 xl:py-2 2xl:py-2.25 border border-default rounded-full bg-elevated text-default">
            <LuFilm className="size-2.5 sm:gap-2.75 md:size-3 lg:size-2.25 xl:size-2.5 2xl:size-2.75" />
            {`${length ?? 0}`}
        </span>
    )
}