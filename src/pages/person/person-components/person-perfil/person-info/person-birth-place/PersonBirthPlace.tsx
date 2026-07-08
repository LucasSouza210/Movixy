import { useTranslate } from "../../../../../../translations/Translations";
import { FaLocationDot } from "react-icons/fa6";
import PersonBirthPlaceSkeleton from "./PersonBirthPlaceSkeleton";

export default function PersonBirthPlace({ place, loading }: { place: string | null | undefined, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <PersonBirthPlaceSkeleton />
            :
            <p className="flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-4.5 sm:leading-5.25 md:leading-6 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 mt-1 sm:mt-0.75 md:mt-0.5 lg:mt-0 text-zinc-600 dark:text-zinc-300">
                <FaLocationDot className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-2.75 2xl:size-3 shrink-0 mt-0 sm:mt-px md:mt-0.5 lg:mt-0 xl:mt-px 2xl:mt-0.5" />
                <span>{place ?? line('unknownBirthPlace')}</span >
            </p >
    )
}