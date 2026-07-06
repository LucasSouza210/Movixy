import { useContext } from "react"
import { Contexts } from "../../../../contexts/ContextsProvider"
import { getCertification } from "../../../../utils/tmdb/getCertification"
import HeroLikeButton from "./HeroLikeButton"
import type { Media, MediaInfoBadges } from "../../../../types/tmdb"
import MediaOverview from "../MediaOverview"
import MediaActions from "../media-actions/MediaActions"
import MediaGenres from "../media-genres/MediaGenres"
import InfoBadges from "./InfoBadges"

export default function MediaInfo({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const isMovie = mediaType == 'movie'

    const certification = getCertification(media, mediaType!, lang)

    const mediaInfo: MediaInfoBadges = {
        rate: media.vote_average,
        runtime: media.runtime,
        seasons: media.number_of_seasons,
        certification: certification
    }

    const releaseYear = (isMovie ? media.release_date : media.first_air_date)?.split("-")[0];

    return (
        <div className="size-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 relative">
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl tracking-wider leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-6 xl:leading-7 2xl:leading-8 text-white lg:text-black lg:dark:text-white">
                    {isMovie ? media.title : media.name} {
                        releaseYear &&
                        <span className="font-medium text-xs sm:text-[13px] md:text-sm lg:text-sm xl:text-base 2xl:text-lg tracking-wide leading-none text-zinc-300 lg:text-zinc-500 lg:dark:text-zinc-400">{`(${releaseYear})`}</span>
                    }
                </p>
                <InfoBadges info={mediaInfo} />
            </div>
            <div className="hidden lg:flex flex-col lg:gap-1 xl:gap-1.5 2xl:gap-2">
                <MediaOverview overview={media.overview} />
                <MediaGenres genres={media.genres} />
            </div>
            <div className="flex items-center lg:gap-3 xl:gap-3.5 2xl:gap-4 absolute lg:relative bottom-0 right-0">
                <div className="hidden lg:block">
                    <MediaActions media={media} mediaType={mediaType} />
                </div>
                <HeroLikeButton />
            </div>
        </div>
    )
}