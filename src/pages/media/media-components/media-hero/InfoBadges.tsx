import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import formatRate from "../../../../utils/tmdb/formatRate";
import { formatRuntime } from "../../../../utils/tmdb/formatRuntime";
import type { Lang } from "../../../../components/ui/lang-selection/DropdownButton";
import type { MediaInfoBadges } from "../../../../types/tmdb";
import HeroBadge from "./HeroBadge";
import { FaClock, FaStar } from "react-icons/fa"

export default function InfoBadges({ info }: { info: MediaInfoBadges }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!


    const getSeasonsLabel = (lang: Lang, number: number) => {
        switch (lang) {
            case 'en':
                return number === 1 ? `${number} season` : `${number} seasons`
            default:
                return number === 1 ? `${number} temporada` : `${number} temporadas`
        }
    }

    return (
        <div className="h-6 sm:h-6.75 md:h-7.5 lg:h-6 xl:h-7 2xl:h-8 flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 flex-wrap">
            <HeroBadge>
                <FaStar className="size-2 sm:size-2.25 md:size-2.5 lg:size-1.5 xl:size-2 2xl:size-2.5 fill-yellow-400" />
                {
                    info.rate ?
                        formatRate(info.rate)
                        :
                        'N/A'
                }
            </HeroBadge>
            <HeroBadge>
                <FaClock className="size-2 sm:size-2.25 md:size-2.5 lg:size-1.5 xl:size-2 2xl:size-2.5 lg:mr-px fill-white lg:fill-zinc-500 lg:dark:fill-zinc-300" />
                {
                    info.runtime != null ?
                        formatRuntime(info.runtime as number)
                        :
                        info.seasons != null ?
                            getSeasonsLabel(lang, info.seasons as number)
                            :
                            'N/A'
                }
            </HeroBadge>
            <HeroBadge text={info.certification ? info.certification : 'N/A'} square />
        </div>
    )
}