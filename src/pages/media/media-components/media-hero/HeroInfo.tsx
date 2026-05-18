import useFormattedRate from "../../../../hooks/useFormattedRate";
import type { Media } from "../../../home/home-components/home-slider/HomeSlider";
import { useformattedRuntime } from "../../../../hooks/useFomarttedRuntime";
import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import type { Lang } from "../../../../components/ui/lang-selection/DropdownButton";
import { getCertification } from "../../../../utils/getCertification";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import HeroBadge from "./HeroBadge";
import HeroLikeButton from "./HeroLikeButton";

export default function HeroInfo({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const formatRate = useFormattedRate
    const formatRuntime = useformattedRuntime


    const isMovie = mediaType == 'movie'

    const getSeasonsLabel = (lang: Lang, number: number) => {
        switch (lang) {
            case 'en':
                return number === 1 ? `${number} season` : `${number} seasons`
            default:
                return number === 1 ? `${number} temporada` : `${number} temporadas`
        }
    }

    const certification = getCertification(media, mediaType!, lang)

    return (
        <div className="inset-0 flex gap-4 sm:gap-5 md:gap-6 absolute z-20 p-6 sm:p-7 md:p-8">
            <img src={`https://image.tmdb.org/t/p/original${media?.poster_path}`} alt="" className="h-full max-h-34 sm:max-h-40 md:max-h-48 w-auto object-cover rounded-2xl" />
            <div className="h-full w-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 relative">
                <p className="font-semibold text-sm sm:text-base md:text-lg tracking-wider leading-4.5 sm:leading-5.5 md:leading-6.5 text-white">{isMovie ? media.title : media.name} <span className="font-medium text-xs sm:text-[13px] md:text-sm tracking-wide leading-none text-zinc-300">{`(${(isMovie ? media.release_date : media.first_air_date)?.split('-')[0]})`}</span></p>
                <div className="h-6 sm:h-6.75 md:h-7.5 flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-wrap">
                    <HeroBadge>
                        <FaStar className="size-2 sm:size-2.25 md:size-2.5 fill-yellow-400" />
                        {formatRate(media.vote_average)}
                    </HeroBadge>
                    <HeroBadge>
                        <FaClock className="size-2 sm:size-2.25 md:size-2.5 fill-white" />
                        {
                            isMovie ?
                                formatRuntime(media.runtime as number)
                                :
                                getSeasonsLabel(lang, media.number_of_seasons as number)
                        }
                    </HeroBadge>
                    <HeroBadge text={certification} square />
                    <HeroLikeButton />
                </div>
            </div>
        </div>
    )
}