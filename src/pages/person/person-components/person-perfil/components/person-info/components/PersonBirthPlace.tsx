import { useTranslate } from "../../../../../../../translations/Translations";
import { FaLocationDot } from "react-icons/fa6";
import Skeleton from "../../../../../../../components/ui/Skeleton";

export default function PersonBirthPlace({ place, loading }: { place: string | null | undefined, loading: boolean }) {

    const { line } = useTranslate()

    return (
        loading ? <Skeleton className="w-fit h-4.5 sm:h-5.25 md:h-6 lg:h-4 xl:h-4.75 2xl:h-5.5 aspect-8/1 mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-0 rounded-sm sm:rounded-[4.5px] md:rounded-[5px] lg:rounded-sm xl:rounded-[4.5px] 2xl:rounded-[5px]" />
            :
            <p className="lg:max-w-7/10 flex items-start lg:items-center gap-1.25 sm:gap-1.5 md:gap-1.75 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-5.5 sm:leading-6.25 md:leading-7 lg:leading-normal text-wrap lg:text-nowrap mt-1 sm:mt-0.75 md:mt-0.5 lg:mt-0 text-default">
                <FaLocationDot className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-2.75 2xl:size-3 shrink-0 mt-1.25 sm:mt-1.5 md:mt-1.75 lg:mt-0 xl:mt-px 2xl:mt-0.5" />
                <span className="lg:truncate min-w-0">
                    {place?.trim() || line('unknownBirthPlace')}
                </span >
            </p>
    )
}