import type { IconType } from "react-icons";
import { useTranslate } from "../../../translations/Translations";

export default function DropdownTitle({ title, icon }: { title: string, icon: IconType }) {

    const { line } = useTranslate()

    const Icon = icon

    return (
        <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider text-black dark:text-white">
            {
                line(title)
            }
            <Icon className="size-3.5 sm:size-4 md:size-4.5 lg:size-3.5 xl:size-4 2xl:size-4.5" />
        </p>
    )
}