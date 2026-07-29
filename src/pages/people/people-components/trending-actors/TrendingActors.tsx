import { useEffect, useState } from "react"
import { getTrendingPeopleByDepartment } from "../../../../services/tmdb/tmdb.services"
import type { PersonDetails } from "../../../../types/tmdb"
import { useTranslate } from "../../../../translations/Translations"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

const itemsPerView = [3, 3, 3, 6]

export default function TrendingActors() {

    const { line } = useTranslate()

    const lang = useLang()

    const [actors, setActors] = useState<PersonDetails[]>([])

    useEffect(() => {
        async function load() {
            try {
                setActors([])

                const actors = await getTrendingPeopleByDepartment(lang, "Acting")

                await new Promise(resolve => setTimeout(resolve, 500))

                setActors(actors ?? [])
            } catch (error) {
                console.error("Failed to load trending actors:", error)
                setActors([])
            }
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('trendingActors')} content={actors} option="actor" itemsPerView={itemsPerView} />
    )
}