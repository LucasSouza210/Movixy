import { useEffect, useState } from "react"
import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingMovies } from "../../../../services/movies/movies.services"
import type { Media } from "../home-slider/HomeSlider"
import useLang from "../../../../hooks/useLang"

export default function TrendingMovies() {

    const { line } = useTranslate()

    const [movies, setMovies] = useState<Media[]>([])

    const lang = useLang()

    useEffect(() => {
        getTrendingMovies(lang).then(setMovies)
    }, [lang])

    return (
        <MediaContainer title={line('trendingMovies')} list={movies} />
    )
}