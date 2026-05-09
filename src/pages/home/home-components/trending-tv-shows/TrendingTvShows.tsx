import { useEffect, useState } from "react"
import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingSeries } from "../../../../services/movies/movies.services"
import type { Media } from "../home-slider/HomeSlider"
import useLang from "../../../../hooks/useLang"

export default function TrendingTvShows() {

    const { line } = useTranslate()

    const [series, setSeries] = useState<Media[]>([])

    const lang = useLang()

    useEffect(() => {
        getTrendingSeries(lang).then(setSeries)
    }, [lang])

    return (
        <MediaContainer title={line('trendingSeries')} list={series} />
    )
}