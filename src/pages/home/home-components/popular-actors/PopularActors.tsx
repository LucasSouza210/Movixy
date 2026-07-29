import { useEffect, useState } from "react";
import useLang from "../../../../hooks/useLang";
import { getPopularActors } from "../../../../services/tmdb/tmdb.services";
import type { PersonCardInfo } from "../../../../types/tmdb";
import ContentRow from "../../../../components/ui/content-row/ContentRow";

const itemsPerView = [3, 3, 3, 6]

export default function PopularActors() {

    const lang = useLang()

    const [actors, setActors] = useState<PersonCardInfo[]| null>(null)

    useEffect(() => {
        async function load() {
            const series = await getPopularActors(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setActors(series)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'popularActors'} content={actors} option="actor" itemsPerView={itemsPerView} />
    )
}