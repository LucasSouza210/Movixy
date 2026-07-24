import { useEffect, useState } from "react"
import { useTranslate } from "../../../../translations/Translations"
import type { Media } from "../../../../types/tmdb"
import { getUpcomingMovies } from "../../../../services/tmdb/tmdb.services"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function UpcomingMovies() {
    const { line } = useTranslate()
    const lang = useLang()

    const [movies, setMovies] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const movies = await getUpcomingMovies(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setMovies(movies)
        }

        load()
    }, [lang])
    
    return (
        <ContentRow title={line('upcomingTitle')} content={movies} option="media" />
    )
}