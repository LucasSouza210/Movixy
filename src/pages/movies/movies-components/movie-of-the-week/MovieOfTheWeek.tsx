import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"
import { getTrendingMovies } from "../../../../services/tmdb/tmdb.services"
import useLang from "../../../../hooks/useLang"
import WeeklyCard from "../../../../components/ui/cards/weekly-card/WeeklyCard"

export default function MovieOfTheWeek() {

    const lang = useLang()

    const [movie, setMovie] = useState<Media | null>(null)

    useEffect(() => {
        async function load() {
            try {
                setMovie(null)

                const movies = await getTrendingMovies(lang)

                await new Promise(resolve => setTimeout(resolve, 500))

                setMovie(movies[0] ?? null);
            } catch (error) {
                console.error("Failed to load movie of the week:", error)
                setMovie(null);
            }
        }

        load()
    }, [lang])

    return (
        <WeeklyCard media={movie}/>
    )
}