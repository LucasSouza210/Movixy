import { useEffect, useState } from "react";
import { getMediaCast } from "../../../../services/tmdb/tmdb.services";
import type { PersonCardData } from "../../../../types/tmdb";
import useLang from "../../../../hooks/useLang";
import ContentRow from "../../../../components/ui/content-row/ContentRow";

export default function MediaCast({ mediaType, id }: { mediaType: string | undefined, id: string | undefined }) {

    const lang = useLang()

    const [cast, setCast] = useState<PersonCardData[] | null>(null)

    useEffect(() => {
        if (!mediaType || !id) return

        const type = mediaType
        const mediaId = id

        setCast(null)

        async function load() {
            const cast = await getMediaCast(type, mediaId, lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setCast(cast)
        }

        load()
    }, [mediaType, id, lang])

    return (
        <ContentRow title={'mediaCast'} content={cast} option="actor" itemsPerView={[3, 3, 3, 6]} gapPerBreakpoint={[4, 5, 6, 4, 5, 6]} scrollBarHeight={[2, 2.25, 2.5, 2, 2.25, 2.5]} />
    )
}