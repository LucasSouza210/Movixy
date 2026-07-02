import { useEffect, useState } from "react"
import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingSeries } from "../../../../services/tmdb/tmdb.services"
import type { Media } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"

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
        <MediaContainer title={line('trendingSeries')} list={series} loading={loading} />
    )
}