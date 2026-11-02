import { useEffect, useState } from "react"
import { getRecommendations } from "../../../../services/tmdb/media"
import type { Media } from "../../../../types/tmdb"
import useLang from "../../../../hooks/utils/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

const scrollBarHeight = [2, 2.25, 2.5, 2, 2.25, 2.5]

export default function Recommendations({ media, mediaType }: { media: Media | null, mediaType: string | undefined }) {

    const lang = useLang()

    const [recommendations, setRecommendations] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            if (!mediaType || !media?.id) return

            const recommendations = await getRecommendations(mediaType, media?.id, lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setRecommendations(recommendations)
        }

        load()
    }, [lang, media, mediaType])

    return (
        <ContentRow title={'youMayAlsoLike'} content={recommendations} option="media" scrollBarHeight={scrollBarHeight} />
    )
}