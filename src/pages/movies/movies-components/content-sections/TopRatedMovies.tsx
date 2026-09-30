import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"
import { getTopRatedMovies } from "../../../../services/tmdb/movies"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function TopRatedMovies() {
    
    const lang = useLang()

    const [movies, setMovies] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const movies = await getTopRatedMovies(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setMovies(movies)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'topRatedTitle'} content={movies} option="media" />
    )
}