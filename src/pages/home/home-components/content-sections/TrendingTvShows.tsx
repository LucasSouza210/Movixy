import { useEffect, useState } from "react"
import { getTrendingSeries } from "../../../../services/tmdb/series"
import type { Media } from "../../../../types/tmdb"
import useLang from "../../../../hooks/utils/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function TrendingTvShows() {

    const lang = useLang()

    const [series, setSeries] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const series = await getTrendingSeries(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setSeries(series)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'trendingSeries'} content={series} option="media" />
    )
}