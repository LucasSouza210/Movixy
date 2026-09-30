import { useEffect, useState } from "react"
import { getTrendingPeopleByDepartment } from "../../../../services/tmdb/person"
import type { PersonCardInfo } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

const itemsPerView = [3, 3, 3, 6]

export default function TrendingActors() {

    const lang = useLang()

    const [actors, setActors] = useState<PersonCardInfo[] | null>(null)

    useEffect(() => {
        async function load() {
            const actors = await getTrendingPeopleByDepartment(lang, 'Acting')

            await new Promise(resolve => setTimeout(resolve, 500))

            setActors(actors)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'trendingActors'} content={actors} option="actor" itemsPerView={itemsPerView} />
    )
}