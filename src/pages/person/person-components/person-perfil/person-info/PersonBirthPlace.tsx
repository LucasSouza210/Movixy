import { FaLocationDot } from "react-icons/fa6";

export default function PersonBirthPlace({ place }: { place: string | null }) {
    return (
        <p className="flex gap-1 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wide leading-4 sm:leading-4.75 md:leading-5.5 lg:leading-4 xl:leading-4.75 2xl:leading-5.5 mt-1 text-zinc-600 dark:text-zinc-300">
            <FaLocationDot className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 xl:size-2.75 2xl:size-3 shrink-0 mt-0.5 sm:mt-1 md:mt-0.75 xl:mt-1" />
            <span>{place}</span>
        </p>
    )
}