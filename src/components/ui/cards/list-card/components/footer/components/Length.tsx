import { LuFilm } from "react-icons/lu";

export default function Length({ length }: { length: number | undefined | null }) {
    return (
        <span className="flex items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-none px-2 sm:px-2.5 md:px-3 lg:px-2 xl:px-2.25 2xl:px-2.5 py-1.75 sm:py-2 md:py-2.25 lg:py-1.5 xl:py-1.75 2xl:py-2 border border-default rounded-full bg-elevated text-default">
            <LuFilm className="size-2.5 sm:gap-2.75 md:size-3 lg:size-1.75 xl:size-2.25 2xl:size-2.75" />
            {`${length ?? 0}`}
        </span>
    )
}