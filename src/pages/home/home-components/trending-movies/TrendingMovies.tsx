import { useEffect, useState } from "react"
import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingMovies } from "../../../../services/tmdb/tmdb.services"
import type { Media } from "../../../../types/tmdb"
import useLang from "../../../../hooks/useLang"

export default function TrendingMovies() {

    const { line } = useTranslate()
    const lang = useLang()

    const [movies, setMovies] = useState<Media[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            setLoading(true)

            const movies = await getTrendingMovies(lang)

            await new Promise(resolve => setTimeout(resolve, 500))

            setMovies(movies)
            setLoading(false)
        }

        load()
    }, [lang])

    return (
        <MediaContainer title={line('trendingMovies')} list={movies} loading={loading} />
    )
}