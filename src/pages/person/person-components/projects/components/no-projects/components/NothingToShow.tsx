import { useTranslate } from "../../../../../../../translations/Translations";
import { LuFolderOpen } from "react-icons/lu";

export default function NothingToShow() {

    const { line } = useTranslate()

    return (
        <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            <LuFolderOpen className="size-12 sm:size-14 md:size-16 lg:size-12 xl:size-14 2xl:size-16 text-default"/>
            <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wider leading-5 sm:leading-5.75 md:leading-6.5 lg:leading-5 2xl:leading-6.5 text-center text-default">{line('noProjects')}</p>
        </div>
    )
}