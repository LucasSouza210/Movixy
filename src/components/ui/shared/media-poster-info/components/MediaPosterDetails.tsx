import type { IconType } from "react-icons"
import { useFormattedDate } from "../../../../../hooks/useFormattedDate"
import { useTranslate } from "../../../../../translations/Translations"
import { FaCalendar, FaStar } from "react-icons/fa";
import formatRate from "../../../../../utils/tmdb/formatRate"

export default function MoviePosterDetails({ title, average, release }: { title: string | undefined, average: number | undefined, release: string | undefined }) {

    const { line } = useTranslate()
    const formatDate = useFormattedDate

    const info: { content: string, icon: IconType }[] = [
        {
            content: average ? formatRate(average) : 'N/A',
            icon: FaStar
        },
        {
            content: formatDate(release) ?? line('noReleaseDate'),
            icon: FaCalendar
        }
    ]

    return (
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            <p className="max-w-4/5 lg:max-w-none font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl leading-6 sm:leading-7 md:leading-8 lg:leading-5.5 xl:leading-6 2xl:leading-7 tracking-widest lg:tracking-wider xl:tracking-widest text-white">{title}</p>
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-3 xl:gap-4 2xl:gap-5">
                {
                    info.map((i, index) => {

                        const Icon = i.icon

                        return (
                            <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none text-zinc-100" key={index}>
                                <Icon className={`size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-3 2xl:size-3.5 ${index == 0 ? 'fill-yellow-300' : 'fill-white'}`} />
                                {i.content}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}