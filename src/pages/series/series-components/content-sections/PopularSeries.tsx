import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"
import { getPopularSeries } from "../../../../services/tmdb/series"
import useLang from "../../../../hooks/utils/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function PopularSeries() {

    const lang = useLang()

    const [series, setSeries] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const series = await getPopularSeries(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setSeries(series)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'popularSeries'} content={series} option="media" />
    )
}