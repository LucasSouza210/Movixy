import { useEffect, useState } from "react";
import { useTranslate } from "../../../../translations/Translations";
import useLang from "../../../../hooks/useLang";
import { getPopularActors } from "../../../../services/tmdb/tmdb.services";
import type { Actor } from "../../../../types/tmdb";
import ContentRow from "../../../../components/ui/content-row/ContentRow";

export default function PopularActors() {

    const { line } = useTranslate()

    const lang = useLang()

    const [actors, setActors] = useState<Actor[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)

            const series = await getPopularActors(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setActors(series)
            setLoading(false)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('popularActors')} content={actors} loading={loading} option="actor" itemsPerView={[3, 3, 3, 5]} gapPerBreakpoint={[5, 6, 7, 4, 5, 6]} scrollBarHeight={[2, 2.5, 3, 2, 2.25, 2.5]} />
    )
}