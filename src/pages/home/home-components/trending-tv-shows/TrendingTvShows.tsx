import { useEffect, useState } from "react"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingSeries } from "../../../../services/tmdb/tmdb.services"
import type { Media } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function TrendingTvShows() {

    const { line } = useTranslate()
    const lang = useLang()

    const [series, setSeries] = useState<Media[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)

            const series = await getTrendingSeries(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setSeries(series)
            setLoading(false)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('trendingSeries')} content={series} loading={loading} option="media" itemsPerView={[2, 2, 2, 5, 5, 5]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.5, 3, 2, 2.25, 2.5]} />
    )
}