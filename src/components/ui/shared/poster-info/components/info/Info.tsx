import type { IconType } from "react-icons"
import { useFormattedDate } from "../../../../../../hooks/utils/useFormattedDate"
import { useTranslate } from "../../../../../../translations/Translations"
import { FaCalendar, FaStar } from "react-icons/fa";
import formatRate from "../../../../../../utils/formatters/formatRate"
import Title from "./components/Title";
import PosterMeta from "./components/poster-meta/PosterMeta";

export default function Info({ title, average, release }: { title: string | undefined, average: number | undefined, release: string | undefined }) {

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
            <Title title={title} />
            <PosterMeta info={info} />
        </div>
    )
}