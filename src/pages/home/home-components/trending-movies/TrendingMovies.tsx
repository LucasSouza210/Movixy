import { useEffect, useState } from "react"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingMovies } from "../../../../services/tmdb/tmdb.services"
import type { Media } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"
import ContentRow from "../../../../components/ui/content-row/ContentRow"

export default function TrendingMovies() {

    const { line } = useTranslate()
    const lang = useLang()

    const [movies, setMovies] = useState<Media[] | null>(null)

    useEffect(() => {
        async function load() {
            const movies = await getTrendingMovies(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setMovies(movies)
        }

        load()
    }, [lang])

    return (
        <ContentRow title={line('trendingMovies')} content={movies} option="media" />
    )
}