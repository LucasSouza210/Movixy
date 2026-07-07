import { useContext, useEffect, useState } from "react"
import { getRecommendations } from "../../../../services/tmdb/tmdb.services"
import { useTranslate } from "../../../../translations/Translations"
import type { Media } from "../../../../types/tmdb"
import { Contexts } from "../../../../contexts/ContextsProvider"
import HorizontalScroll from "../../../../components/ui/scrolls/HorizontalScroll"
import MediaCard from "../../../../components/ui/cards/media-card/MediaCard"
import MediaCardSkeleton from "../../../../components/ui/cards/media-card/MediaCardSkeleton"

export default function MediaRecommendations({ media, mediaType }: { media: Media | null, mediaType: string | undefined }) {

    const contexts = useContext(Contexts)
    const { lang } = contexts!

    const { line } = useTranslate()

    const [recommendations, setRecommendations] = useState<Media[]>([])
    const [loading, setLoading] = useState(true)

    const items = loading ? Array.from({ length: 5 }) : recommendations

    useEffect(() => {
        if (!media?.id || !mediaType) return
        getRecommendations(mediaType, media?.id, lang).then((data) => setRecommendations(data))
    }, [media?.id, lang])

    useEffect(() => {
        if (!media?.id || !mediaType) return
        setLoading(true)
        getRecommendations(mediaType, media?.id, lang).then(setRecommendations).finally(() => setLoading(false))
    }, [media?.id, lang])

    return (
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-7 2xl:gap-8">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl tracking-wider md:tracking-widest lg:tracking-wider leading-none text-black dark:text-white">{line('youMayAlsoLike')}</p>
            <HorizontalScroll className="w-full pb-3 sm:pb-3.5 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-5" itemsPerView={[2, 2, 2, 5]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.25, 2.5, 2, 2.25, 2.5]}>
                {
                    items.map((item, index) =>
                        loading ? <MediaCardSkeleton key={index} /> : <MediaCard media={item as Media} key={index} />
                    )
                }
            </HorizontalScroll>
        </div>
    )
}