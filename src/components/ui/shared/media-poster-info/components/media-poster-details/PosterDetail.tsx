import type { IconType } from "react-icons";

export default function PosterDetail({ content, icon, type }: { content: string | undefined, icon: IconType, type: string }) {

    const Icon = icon

    const isRate = type == 'rate'

    return (
        <p className={`flex items-center font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none text-zinc-100 ${isRate ? 'gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75' : 'gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5'}`}>
            <Icon className={`size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-3 2xl:size-3.5 ${isRate ? 'fill-yellow-300' : 'fill-white'}`} />
            {content}
        </p>
    )
}