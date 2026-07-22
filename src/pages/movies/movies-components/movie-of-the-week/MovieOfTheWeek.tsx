import { useEffect, useState } from "react"
import type { Media } from "../../../../types/tmdb"
import { getTrendingMovies } from "../../../../services/tmdb/tmdb.services"
import useLang from "../../../../hooks/useLang"
import MovieBackdrop from "./MovieBackdrop"
import MovieInfo from "./MovieInfo"

export default function MovieOfTheWeek() {

    const lang = useLang()

    const [movie, setMovie] = useState<Media | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function load() {

            setLoading(true)

            try {
                const movies = await getTrendingMovies(lang)
                await new Promise(resolve => setTimeout(resolve, 500))
                setMovie(movies[0] ?? null)
            }
            finally {
                setLoading(false)
            }
        }

        load()

    }, [lang])

    return (
        loading ? <span className="w-full aspect-2/3 lg:aspect-video rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] skeleton" />
            :
            <div className="w-full aspect-2/3 lg:aspect-video flex rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border border-default relative">
                <MovieBackdrop poster={movie?.poster_path} backdrop={movie?.backdrop_path} title={movie?.title} />
                <MovieInfo />
            </div>
    )
}