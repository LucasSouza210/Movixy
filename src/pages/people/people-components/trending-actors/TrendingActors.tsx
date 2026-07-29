import { useEffect, useState } from "react"
import { getTrendingPeopleByDepartment } from "../../../../services/tmdb/tmdb.services"
import type { PersonCardInfo } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

const itemsPerView = [3, 3, 3, 6]

export default function TrendingActors() {

    const lang = useLang()

    const [actors, setActors] = useState<PersonCardInfo[]>([])

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
        <ContentRow title={'trendingActors'} content={actors} option="actor" itemsPerView={itemsPerView} />
    )
}