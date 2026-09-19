import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useLang from "../../hooks/useLang";
import { getMediaDetails } from "../../services/tmdb/tmdb.services";
import type { Media } from "../../types/tmdb";
import PageContainer from "../../components/ui/PageContainer";
import MediaCast from "./media-components/media-cast/MediaCast";
import MediaMetrics from "./media-components/media-metrics/MediaMetrics";
import ExplorerWrapper from "./media-components/seasons-explorer/SeasonsExplorer";
import MediaRecommendations from "./media-components/media-recommendations/MediaRecommendations";
import MediaDetails from "./media-components/media-details/MediaDetails";

export default function MediaPage() {

    const { mediaType, id } = useParams()
    const navigate = useNavigate()

    const [media, setMedia] = useState<Media | null>(null)
    const [loading, setLoading] = useState(true)

    const lang = useLang()

    useEffect(() => {
        let ignore = false

        async function load() {

            if (!mediaType || !id) return

            setLoading(true)
            setMedia(null)

            try {
                const media = await getMediaDetails(mediaType, id, lang)

                await new Promise(resolve => setTimeout(resolve, 500))

                if (!ignore) {
                    setMedia(media)
                }
            } catch (error) {
                console.error("Failed to fetch media details:", error)
                if (!ignore) {
                    const isMovie = mediaType === 'movie'
                    navigate("/404", {
                        replace: true, state: { title: isMovie ? 'movieNotFound' : 'seriesNotFound', subtitle: isMovie ? 'movieNotFoundSubtitle' : 'seriesNotFoundSubtitle' }
                    })
                }
            } finally {
                if (!ignore) {
                    setLoading(false)
                }
            }
        }

        load()

        return () => {
            ignore = true
        }
    }, [mediaType, id, lang])

    return (
        <PageContainer>
            <div className="size-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-9 2xl:gap-10">
                <MediaDetails media={media} mediaType={mediaType} loading={loading} />
                <div className="w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-8 xl:gap-9 2xl:gap-10">
                    <MediaCast mediaType={mediaType} id={id} />
                    <MediaMetrics media={media} mediaType={mediaType} loading={loading} />
                    {
                        mediaType !== 'movie' &&
                        <ExplorerWrapper media={media} seasons={media?.seasons} loading={loading} />
                    }
                    <MediaRecommendations media={media} mediaType={mediaType} />
                </div>
            </div>
        </PageContainer>
    )
}