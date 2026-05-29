import { useContext, useEffect, useState } from "react"
import { getRecommendations } from "../../../../services/tmdb/tmdb.services"
import { useTranslate } from "../../../../translations/Translations"
import type { Media } from "../../../../types/tmdb"
import { Contexts } from "../../../../contexts/ContextsProvider"
import { useNavigate } from "react-router-dom"
import HorizontalScroll from "../../../../components/ui/HorizontalScroll"

export default function MediaRecommendations({ media, mediaType }: { media: Media, mediaType: string | undefined }) {

    const contexts = useContext(Contexts)
    const { lang } = contexts!

    const { line } = useTranslate()
    const navigate = useNavigate()

    const [recommendations, setRecommendations] = useState<Media[]>([])

    const isMovie = mediaType == 'movie'

    useEffect(() => {
        if (!media.id || !mediaType) return
        getRecommendations(mediaType, media.id, lang).then((data) => setRecommendations(data))
    }, [media.id, lang])

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('youMayAlsoLike')}</p>
            <HorizontalScroll className="w-full pb-3 sm:pb-3.5 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-5" itemsPerView={[2, 2, 2, 5]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.25, 2.5, 2, 2.25, 2.5]}>
                {
                    recommendations?.slice(0, 10).map((i, index) => (
                        <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 cursor-pointer" onClick={() => navigate(`/media/${mediaType}/${i.id}`)} key={index}>
                            <img src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} className="w-full h-auto object-cover rounded-3xl sm:rounded-[28px] md:rounded-4xl lg:rounded-[20px] xl:rounded-[23px] 2xl:rounded-[26px]" loading="lazy" decoding="async" draggable={false} alt={i?.title} />
                            <p className="text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider md:tracking-widest leading-5.5 sm:leading-6.5 md:leading-7.5 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-zinc-800 dark:text-zinc-200">
                                {isMovie ? i?.title : i?.name} <span className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wide md:tracking-widest leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-4 xl:leading-4.5 2xl:leading-5 text-zinc-500 dark:text-zinc-400">({i[mediaType === "movie" ? "release_date" : "first_air_date"]?.split("-")[0]})</span>
                            </p>
                        </div>
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}