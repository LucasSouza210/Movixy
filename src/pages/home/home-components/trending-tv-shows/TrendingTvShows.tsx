import { useEffect, useState } from "react"
import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingSeries } from "../../../../services/movies/movies.services"
import type { Media } from "../home-slider/HomeSlider"

export default function TrendingTvShows() {

    const { line } = useTranslate()

    const [series, setSeries] = useState<Media[]>([])

    useEffect(() => {
        getTrendingSeries().then(setSeries)
    }, [])

    return (
        <MediaContainer title={line('trendingSeries')} list={series} />
    )
}