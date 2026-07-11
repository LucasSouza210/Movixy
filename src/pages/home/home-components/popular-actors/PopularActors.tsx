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

    useEffect(() => {
        async function load() {
            const series = await getPopularActors(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setActors(series)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('popularActors')} content={actors} option="actor" itemsPerView={[3, 3, 3, 5]} />
    )
}