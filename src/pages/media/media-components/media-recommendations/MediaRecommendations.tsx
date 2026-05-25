import { useContext, useEffect, useState } from "react"
import { getRecommendations } from "../../../../services/movies/movies.services"
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
        <div className="w-full flex flex-col gap-6">
            <p className="font-medium text-base tracking-wider leading-none text-black dark:text-white">{line('youMayAlsoLike')}</p>
            <HorizontalScroll className="w-full pb-3" itemsPerView={[2]} gapPerBreakpoint={[5]} scrollBarHeight={[2]}>
                {
                    recommendations?.slice(0, 10).map((i, index) => (
                        <div className="w-full flex flex-col gap-3 cursor-pointer" onClick={() => navigate(`/media/${mediaType}/${i.id}`)} key={index}>
                            <img src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} className="w-full h-auto object-cover rounded-3xl" loading="lazy" decoding="async" draggable={false} alt={i?.title} />
                            <p className="text-base font-medium tracking-wider leading-6 text-zinc-800 dark:text-zinc-200">
                                {isMovie ? i?.title : i?.name} <span className="text-sm font-medium leading-5 text-zinc-500 dark:text-zinc-400">({i[mediaType === "movie" ? "release_date" : "first_air_date"]?.split("-")[0]})</span>
                            </p>
                        </div>
                    ))
                }
            </HorizontalScroll>
        </div>
    )
}