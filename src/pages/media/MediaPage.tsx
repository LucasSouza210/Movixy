import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useLang from "../../hooks/useLang";
import MediaHero from "./media-components/media-hero/MediaHero";
import { getMediaDetails } from "../../services/movies/movies.services";
import type { Media } from "../../types/tmdb";
import PageContainer from "../../components/ui/PageContainer";
import MediaActions from "./media-components/media-actions/MediaActions";
import MediaOverview from "./media-components/MediaOverview";
import MediaGenres from "./media-components/media-genres/MediaGenres";
import MediaCast from "./media-components/media-cast/MediaCast";
import MediaDetails from "./media-components/media-details/MediaDetails";
import ExplorerWrapper from "./media-components/seasons-explorer/SeasonsExplorer";


export default function MediaPage() {

    const { mediaType, id } = useParams()

    const [media, setMedia] = useState<Media | null>(null)

    const lang = useLang()

    useEffect(() => {

        if (!mediaType || !id) return

        getMediaDetails(mediaType, id, lang).then(setMedia)

    }, [mediaType, id, lang])

    if (!media) return

    return (
        <PageContainer>
            <div className="size-full flex flex-col gap-6">
                <MediaHero media={media} mediaType={mediaType} />
                <MediaActions media={media} mediaType={mediaType} />
                <MediaOverview overview={media.overview} />
                <MediaGenres genres={media.genres} />
                <MediaCast cast={media?.credits?.cast} />
                <MediaDetails media={media} mediaType={mediaType} />
                {
                    mediaType !== 'movie' &&
                    <ExplorerWrapper media={media} seasons={media?.seasons} />
                }
            </div>
        </PageContainer>
    )
}