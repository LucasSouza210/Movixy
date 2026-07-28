import { useEffect, useState } from "react"
import { useTranslate } from "../../../../translations/Translations"
import type { Media } from "../../../../types/tmdb"
import { getTopRatedSeries } from "../../../../services/tmdb/tmdb.services"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function TopRatedSeries() {

    const { line } = useTranslate()
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
        <ContentRow title={line('topRatedTitle')} content={series} option="media" />
    )
}