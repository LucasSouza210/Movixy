import { FaLocationDot } from "react-icons/fa6";

export default function ActorBirthPlace({ place }: { place: string | null }) {
    return (
        <p className="flex items-center gap-1 text-xs sm:text-sm md:text-base lg:text-xs font-medium tracking-wide leading-4 sm:leading-4.75 md:leading-5.5 lg:leading-4 mt-1 text-zinc-600 dark:text-zinc-300">
            <FaLocationDot className="size-2.5 sm:size-3 md:size-3.5 lg:size-2.5 shrink-0" />
            <span>{place}</span>
        </p>
    )
}