import { useTranslate } from "../../../../../../../../translations/Translations";
import type { IconType } from "react-icons";

export default function Label({ icon, label, translate }: { icon: IconType, label: string, translate?: boolean }) {

    const { line } = useTranslate()

    const Icon = icon

    return (
        <div className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5">
            <Icon className="size-3 sm:size-3.25 md:size-3.5 lg:size-2.5 xl:size-3 2xl:size-3.5" />
            <span className="text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider truncate">
                {
                    translate ? line(label) : label
                }
            </span>
        </div>
    )
}