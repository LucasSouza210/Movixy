import { FaStar } from "react-icons/fa";
import useFormattedRate from "../../../../hooks/useFormattedRate";
import type { Media } from "../../../home/home-components/home-slider/HomeSlider";
import { FaClock } from "react-icons/fa6";
import { useformattedRuntime } from "../../../../hooks/useFomarttedRuntime";
import { useContext } from "react";
import { Contexts } from "../../../../contexts/ContextsProvider";
import type { Lang } from "../../../../components/ui/lang-selection/DropdownButton";
import { getCertification } from "../../../../utils/getCertification";

export default function HeroInfo({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    const contexts = useContext(Contexts)

    const { lang } = contexts!

    const formatRate = useFormattedRate
    const formatRuntime = useformattedRuntime


    const typeOfMedia = mediaType == 'movie'

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
        <div className="inset-0 flex gap-4 absolute z-20 p-6">
            <img src={`https://image.tmdb.org/t/p/original${media?.poster_path}`} alt="" className="h-full max-h-34 w-auto object-cover rounded-2xl" />
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm tracking-wider leading-4.5 text-white">{typeOfMedia ? media.title : media.name} <span className="font-medium text-xs tracking-wide leading-none text-zinc-300">{`(${(typeOfMedia ? media.release_date : media.first_air_date)?.split('-')[0]})`}</span></p>
                <div className="h-6 flex items-center gap-2 flex-wrap">
                    <span className="h-full flex items-center gap-1 px-2 border rounded-lg backdrop-blur-[2px] font-medium text-[10px] tracking-wide leading-none bg-zinc-900/50 border-zinc-800/50 text-white">
                        <FaStar className="size-2 fill-yellow-400" />
                        {formatRate(media.vote_average)}
                    </span>
                    <span className="h-full flex items-center gap-1 px-2 border rounded-lg backdrop-blur-[2px] font-medium text-[10px] tracking-wide leading-none bg-zinc-900/50 border-zinc-800/50 text-white">
                        <FaClock className="size-2 fill-white" />
                        {
                            typeOfMedia ?
                                formatRuntime(media.runtime as number)
                                :
                                getSeasonsLabel(lang, media.number_of_seasons as number)
                        }
                    </span>
                    <span className="h-full aspect-square flex items-center justify-center font-medium text-xs tracking-wide leading-none border rounded-lg backdrop-blur-[2px] bg-zinc-900/50 border-zinc-800/50 text-white">{certification}</span>

                </div>
            </div>
        </div>
    )
}