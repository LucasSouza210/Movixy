import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"
import { getTopRatedSeries } from "../../../../services/tmdb/series"
import useLang from "../../../../hooks/utils/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function TopRated() {

    const lang = useLang()

    const [series, setSeries] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const series = await getTopRatedSeries(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setSeries(series)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'topRatedTitle'} content={series} option="media" />
    )
}