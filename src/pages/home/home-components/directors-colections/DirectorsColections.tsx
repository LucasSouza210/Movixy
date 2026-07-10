import { useEffect, useState } from "react";
import { useTranslate } from "../../../../translations/Translations";
import useLang from "../../../../hooks/useLang";
import { getDirectorsColections } from "../../../../services/tmdb/tmdb.services";
import type { Director } from "../../../../types/tmdb";
import ContentRow from "../../../../components/ui/content-row/ContentRow";

export default function DirectorsColections() {

    const { line } = useTranslate()

    const lang = useLang()

    const [directors, setDirectors] = useState<Director[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)

            const series = await getDirectorsColections(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setDirectors(series)
            setLoading(false)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('behindTheCamera')} content={directors} loading={loading} option="director" itemsPerView={[1, 1, 1, 2]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.5, 3, 2, 2.25, 2.5]} />
    )
}