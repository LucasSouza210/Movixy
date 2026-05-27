import { useContext } from "react"
import { useformattedRuntime } from "../../../../hooks/useFomarttedRuntime"
import useFormattedRate from "../../../../hooks/useFormattedRate"
import { Contexts } from "../../../../contexts/ContextsProvider"
import { getCertification } from "../../../../utils/tmdb/getCertification"
import HeroBadge from "./HeroBadge"
import HeroLikeButton from "./HeroLikeButton"
import type { Media } from "../../../../types/tmdb"
import type { Lang } from "../../../../components/ui/lang-selection/DropdownButton"
import { FaClock, FaStar } from "react-icons/fa"
import MediaOverview from "../MediaOverview"
import MediaActions from "../media-actions/MediaActions"
import MediaGenres from "../media-genres/MediaGenres"

export default function MediaInfo({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

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
        <div className="size-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 relative">
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2">
                <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-base tracking-wider leading-4.5 sm:leading-5.5 md:leading-6.5 text-white lg:text-black lg:dark:text-white">{isMovie ? media.title : media.name} <span className="font-medium text-xs sm:text-[13px] md:text-sm tracking-wide leading-none text-zinc-300 lg:text-zinc-500 lg:dark:text-zinc-400">{`(${(isMovie ? media.release_date : media.first_air_date)?.split('-')[0]})`}</span></p>
                <div className="h-6 sm:h-6.75 md:h-7.5 lg:h-7 flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-wrap">
                    <HeroBadge>
                        <FaStar className="size-2 sm:size-2.25 md:size-2.5 lg:size-2 fill-yellow-400" />
                        {formatRate(media.vote_average)}
                    </HeroBadge>
                    <HeroBadge>
                        <FaClock className="size-2 sm:size-2.25 md:size-2.5 lg:size-2 lg:mr-px fill-white lg:fill-zinc-500 lg:dark:fill-zinc-300" />
                        {
                            isMovie ?
                                formatRuntime(media.runtime as number)
                                :
                                getSeasonsLabel(lang, media.number_of_seasons as number)
                        }
                    </HeroBadge>
                    <HeroBadge text={certification} square />
                </div>
            </div>
            <div className="hidden lg:flex flex-col lg:gap-1">
                <MediaOverview overview={media.overview} />
                <MediaGenres genres={media.genres} />
            </div>
            <div className="flex items-center lg:gap-3 absolute lg:relative bottom-0 right-0">
                <div className="hidden lg:block">
                    <MediaActions media={media} mediaType={mediaType} />
                </div>
                <HeroLikeButton />
            </div>
        </div>
    )
}