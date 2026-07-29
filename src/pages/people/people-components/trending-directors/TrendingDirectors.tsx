import { useEffect, useState } from "react"
import type { PersonDetails } from "../../../../types/tmdb"
import { getTrendingPeopleByDepartment } from "../../../../services/tmdb/tmdb.services"
import { useTranslate } from "../../../../translations/Translations"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

const itemsPerView = [3, 3, 3, 6]

export default function TrendingDirectors() {

    const { line } = useTranslate()

    const lang = useLang()

    const [directors, setDirectors] = useState<PersonDetails[]>([])

    useEffect(() => {
        async function load() {
            try {
                setDirectors([])

                const directors = await getTrendingPeopleByDepartment(lang, "Directing")

                await new Promise(resolve => setTimeout(resolve, 500))

                setDirectors(directors ?? [])
            } catch (error) {
                console.error("Failed to load trending directors:", error)
                setDirectors([])
            }
        }

        load()
    }, [lang])


    return (
        <ContentRow title={line('trendingDirectors')} content={directors} option="actor" itemsPerView={itemsPerView} />
    )
}