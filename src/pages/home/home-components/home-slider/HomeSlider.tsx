import { useEffect, useState } from "react"
import { getMovieTrailer, getNowPlayingMovies } from "../../../../services/movies/movies.services"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useTranslate } from "../../../../translations/Translations";
import { FaStar } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default function HomeSlider() {

    const [movies, setMovies] = useState<any[]>([])
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null)

    const { line } = useTranslate()

    const handleFormat = (rate: number) => {
        const truncated = Math.trunc(rate * 10) / 10
        return truncated.toFixed(1)
    }

    useEffect(() => {
        getNowPlayingMovies().then(setMovies)
    }, [])

    useEffect(() => {
        if (!movies.length) return

        getMovieTrailer(movies[0].id).then((video) => {
            if (video) {
                setTrailerUrl(`https://www.youtube.com/watch?v=${video.key}`)
            }
        })
    }, [movies])

    return (
        <div className="w-full flex relative rounded-[40px] overflow-hidden border border-default" onClick={() => console.log(movies)}>
            <img src={`https://image.tmdb.org/t/p/original${movies[0]?.poster_path}`} className="size-full block lg:hidden" />
            <img src={`https://image.tmdb.org/t/p/original${movies[0]?.backdrop_path}`} className="size-full hidden lg:block" />
            <div className="size-full flex flex-col justify-end items-center gap-8 absolute p-6 bg-black/55">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <p className="max-w-7/10 font-semibold text-lg leading-6 tracking-widest text-white">{movies[0]?.title}</p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-1 font-medium text-sm tracking-wider leading-none text-zinc-100">
                                <FaStar className="size-3 fill-yellow-300" />
                                {handleFormat(movies[4]?.vote_average)}
                            </p>
                            <p className="flex items-center gap-1.5 font-medium text-sm tracking-wider leading-none text-zinc-300">
                                <FaCalendar className="size-3 fill-white" />
                                {movies[0]?.release_date.split("-").reverse().join("-").replace(/-/g, " ")}
                            </p>
                        </div>
                    </div>
                    <a className="w-fit h-12 flex items-center justify-center gap-2 rounded-2xl font-medium text-sm tracking-wider leading-none px-6 bg-orange-500 text-white" href={trailerUrl || "#"} target="_blank" rel="noopener noreferrer">
                        {line('sliderTrailer')}
                        <LuExternalLink className="size-3.5" />
                    </a>
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <button><FaAngleLeft className="fill-zinc-300" /></button>
                    <div className="flex items-center gap-2">
                        {
                            [0, 1, 2, 3, 4].map((i, index) => (
                                <button key={index}><span className={`${index == 0 ? 'bg-orange-500' : 'bg-zinc-400'} size-2 block rounded-full`} /></button>
                            ))
                        }
                    </div>
                    <button><FaAngleRight className="fill-zinc-300" /></button>
                </div>
            </div>
        </div>
    )
}