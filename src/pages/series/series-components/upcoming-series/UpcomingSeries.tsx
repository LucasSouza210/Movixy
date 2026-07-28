import { useEffect, useState } from "react";
import { useTranslate } from "../../../../translations/Translations";
import { getUpcomingSeries } from "../../../../services/tmdb/tmdb.services";
import type { Media } from "../../../../types/tmdb";
import useLang from "../../../../hooks/useLang";
import ContentRow from "../../../../components/ui/content-row/ContentRow";

export default function UpcomingSeries() {

    const { line } = useTranslate()
    const lang = useLang()

    const [series, setSeries] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const series = await getUpcomingSeries(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setSeries(series)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('upcomingTitle')} content={series} option="media" />
    )
}