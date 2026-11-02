import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"

import useLang from "../../../../hooks/utils/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"
import { getPopularMovies } from "../../../../services/tmdb/movies"

export default function Popular() {

    const lang = useLang()

    const [movies, setMovies] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const movies = await getPopularMovies(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setMovies(movies)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={'popularMovies'} content={movies} option="media" />
    )
}