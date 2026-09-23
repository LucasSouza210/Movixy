import { useTranslate } from "../../../../../../translations/Translations";
import { FaLocationDot } from "react-icons/fa6";
import PersonBirthPlaceSkeleton from "./PersonBirthPlaceSkeleton";

export default function PersonBirthPlace({ place, loading }: { place: string | null | undefined, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <PersonBirthPlaceSkeleton />
            :
            <p className="flex items-start lg:items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-normal text-wrap mt-1 sm:mt-0.75 md:mt-0.5 lg:mt-0 lg:truncate text-zinc-600 dark:text-zinc-300">
                <FaLocationDot className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-2.75 2xl:size-3 shrink-0 mt-1.25 sm:mt-1.5 md:mt-1.75 lg:mt-0 xl:mt-px 2xl:mt-0.5" />
                <span>{place?.trim() || line('unknownBirthPlace')}</span >
            </p>
    )
}