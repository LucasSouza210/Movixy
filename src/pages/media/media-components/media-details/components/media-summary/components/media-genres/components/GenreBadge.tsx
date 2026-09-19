import { useTranslate } from "../../../../../../../../../translations/Translations";
import type { IconType } from "react-icons";
import type { Genre } from "../../../../../../../../../types/tmdb";
import { LuCircleHelp } from "react-icons/lu";

export default function GenreBadge({ genre, icon }: { genre: Genre | undefined, icon: IconType | null }) {

    const { line } = useTranslate()

    const Icon = icon ?? LuCircleHelp

    return (
        <span className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.5 2xl:gap-2 text-xs sm:text-[13px] md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-none border border-default rounded-full px-4 md:px-5 lg:px-2.5 xl:px-3.25 2xl:px-4 py-3 sm:py-3.5 md:py-4 lg:py-2 xl:py-2.5 2xl:py-3 bg-default text-default">
            <Icon />
            {genre?.name ?? line('noTitle')}
        </span>
    )
}