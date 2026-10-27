import type { IconType } from "react-icons";

export default function Icon({ icon }: { icon: IconType }) {

    const Icon = icon

    return (
        <span className="size-12 sm:size-13 md:size-14 lg:size-10 xl:size-11 2xl:size-12 flex items-center justify-center rounded-full bg-orange-500/30">
            <Icon className="size-1/2 text-orange-500" />
        </span>
    )
}