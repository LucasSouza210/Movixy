import { useEffect, useState } from "react";
import type { Media } from "../../../../types/tmdb";
import { getTrendingSeries } from "../../../../services/tmdb/tmdb.services";
import useLang from "../../../../hooks/useLang";
import WeeklyCard from "../../../../components/ui/cards/weekly-card/WeeklyCard";

export default function SerieOfTheWeek() {

    const lang = useLang()

    const [serie, setSerie] = useState<Media | null>(null)

    useEffect(() => {
        async function load() {
            try {
                setSerie(null)

                const series = await getTrendingSeries(lang)

                await new Promise(resolve => setTimeout(resolve, 500))

                setSerie(series[0] ?? null)
            } catch (error) {
                console.error("Failed to load serie of the week:", error)
                setSerie(null)
            }
        }

        load()
    }, [lang])

    return (
        <WeeklyCard media={serie} />
    )
}