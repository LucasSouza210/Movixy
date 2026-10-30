import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"
import { getUpcomingMovies } from "../../../../services/tmdb/movies"
import useLang from "../../../../hooks/utils/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function UpcomingMovies() {

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
        <ContentRow title={'upcomingTitle'} content={movies} option="media" />
    )
}