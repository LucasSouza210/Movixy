import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMediaDetails } from "../../services/tmdb/media";
import type { Media } from "../../types/tmdb";
import { filterSeasons } from "../../utils/tmdb/filterSeasons";
import useLang from "../../hooks/utils/useLang";
import PageContainer from "../../components/ui/PageContainer";
import Details from "./media-components/details/Details";
import Cast from "./media-components/cast/Cast";
import Metrics from "./media-components/metrics/Metrics";
import Recommendations from "./media-components/recommendations/Recommendations";
import ExplorerWrapper from "./media-components/seasons-explorer/SeasonsExplorer";

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
            <Details media={media} mediaType={mediaType} loading={loading} />
            <Cast mediaType={mediaType} id={id} />
            <Metrics media={media} mediaType={mediaType} loading={loading} />
            {
                mediaType !== 'movie' &&
                <ExplorerWrapper media={media} seasons={filterSeasons(media?.seasons)} loading={loading} />
            }
            <Recommendations media={media} mediaType={mediaType} />
        </PageContainer>
    )
}