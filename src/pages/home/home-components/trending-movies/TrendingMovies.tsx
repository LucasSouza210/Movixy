import { useEffect, useState } from "react"
import MediaContainer from "../../../../components/ui/MediaContainer"
import { useTranslate } from "../../../../translations/Translations"
import { getTrendingMovies } from "../../../../services/movies/movies.services"
import type { Media } from "../home-slider/HomeSlider"

export default function TrendingMovies() {

    const { line } = useTranslate()

    const [movies, setMovies] = useState<Media[]>([])

    useEffect(() => {
        getTrendingMovies().then(setMovies)
    }, [])

    return (
        <MediaContainer title={line('trendingMovies')} list={movies}/>
    )
}