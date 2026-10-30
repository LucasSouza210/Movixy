import { useEffect, useState } from "react";
import { getUpcomingSeries } from "../../../../services/tmdb/series";
import type { Media } from "../../../../types/tmdb";
import useLang from "../../../../hooks/utils/useLang";
import ContentRow from "../../../../components/ui/content-row/ContentRow";

export default function UpcomingSeries() {

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
        <ContentRow title={'upcomingTitle'} content={series} option="media" />
    )
}