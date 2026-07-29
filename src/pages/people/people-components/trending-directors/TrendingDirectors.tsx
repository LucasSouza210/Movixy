import { useEffect, useState } from "react"
import type { PersonCardInfo } from "../../../../types/tmdb"
import { getTrendingPeopleByDepartment } from "../../../../services/tmdb/tmdb.services"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

const itemsPerView = [3, 3, 3, 6]

export default function TrendingDirectors() {

    const lang = useLang()

    const [directors, setDirectors] = useState<PersonCardInfo[] | null>(null)

    useEffect(() => {
        async function load() {
            const directors = await getTrendingPeopleByDepartment(lang, 'Directing')

            await new Promise(resolve => setTimeout(resolve, 500))

            setDirectors(directors)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'trendingDirectors'} content={directors} option="actor" itemsPerView={itemsPerView} />
    )
}