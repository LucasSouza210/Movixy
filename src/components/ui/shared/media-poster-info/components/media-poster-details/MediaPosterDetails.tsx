import type { IconType } from "react-icons"
import { useFormattedDate } from "../../../../../../hooks/useFormattedDate"
import { useTranslate } from "../../../../../../translations/Translations"
import { FaCalendar, FaStar } from "react-icons/fa";
import formatRate from "../../../../../../utils/tmdb/formatRate"
import PosterDetail from "./PosterDetail";

export default function MoviePosterDetails({ title, average, release }: { title: string | undefined, average: number | undefined, release: string | undefined }) {

    const { line } = useTranslate()
    const formatDate = useFormattedDate

    const info: { content: string, icon: IconType, type: string }[] = [
        {
            content: average ? formatRate(average) : 'N/A',
            icon: FaStar,
            type: 'rate'
        },
        {
            content: formatDate(release) ?? line('noReleaseDate'),
            icon: FaCalendar,
            type: 'release'
        }
    ]

    return (
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            <p className="max-w-4/5 lg:max-w-none font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl leading-7 sm:leading-8 md:leading-9.5 lg:leading-6 xl:leading-7 2xl:leading-8 tracking-widest lg:tracking-wider xl:tracking-widest line-clamp-2 text-white">{title}</p>
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-3 xl:gap-4 2xl:gap-5">
                {
                    info.map((i, index) => {

                        return (
                            <PosterDetail content={i.content} icon={i.icon} type={i.type} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}