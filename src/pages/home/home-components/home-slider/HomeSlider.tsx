import { useEffect, useRef, useState } from "react"
import { getMovieTrailer, getNowPlayingMovies } from "../../../../services/movies/movies.services"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useTranslate } from "../../../../translations/Translations";
import { FaStar } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default function HomeSlider() {

    const { line } = useTranslate()

    const [movies, setMovies] = useState<any[]>([])
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null)
    const [content, setContent] = useState(movies)
    const [current, setCurrent] = useState(movies[1])

    const circularIndex = (index: number, length: number) => (index + length) % length
    const currentIndex = movies.indexOf(current)

    const sliderInterval = useRef<number | undefined>(undefined)

    const handleFormat = (rate: number) => {
        const truncated = Math.trunc(rate * 10) / 10
        return truncated.toFixed(1)
    }

    const resetInterval = () => {
        clearInterval(sliderInterval.current)
        sliderInterval.current = setInterval(() => {
            setCurrent((prev: any) => {
                const index = movies.indexOf(prev)
                return movies[circularIndex(index + 1, movies.length)]
            })
        }, 5000)
    }

    const nextSlide = () => {
        resetInterval()
        const index = movies.indexOf(current);
        const next = movies[circularIndex(index + 1, movies.length)]
        setCurrent(next)
    }

    const previousSlide = () => {
        resetInterval()
        const index = movies.indexOf(current);
        const prev = movies[circularIndex(index - 1, movies.length)]
        setCurrent(prev)
    }

    useEffect(() => {
        getNowPlayingMovies().then(setMovies)
    }, [])

    useEffect(() => {
        if (!movies.length) return

        getMovieTrailer(current.id).then((video) => {
            if (video) {
                setTrailerUrl(`https://www.youtube.com/watch?v=${video.key}`)
            }
        })
    }, [current])

    useEffect(() => {
        if (!movies.length) return

        setContent(movies)
        setCurrent(movies[0])
    }, [movies])

    useEffect(() => {

        if (!movies.length || !current) return

        const length = movies.length
        const currentIndex = movies.indexOf(current)
        const previousFromCurrent = movies[circularIndex(currentIndex - 1, length)]

        const restante = []
        for (let i = 1; i < length - 1; i++) {
            restante.push(movies[circularIndex(currentIndex + i, length)])
        }

        setContent([previousFromCurrent, current, ...restante])
    }, [current, movies])

    useEffect(() => {

        if (!movies.length) return

        sliderInterval.current = setInterval(() => {
            setCurrent((prev: any) => {
                const index = movies.indexOf(prev)

                if (index === -1) return movies[0]

                return movies[circularIndex(index + 1, movies.length)]
            })
        }, 5000)

        return () => clearInterval(sliderInterval.current)
    }, [movies])

    return (
        <div className="w-full flex relative rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border border-default" onClick={() => console.log(movies)}>
            <img src={`https://image.tmdb.org/t/p/original${current?.poster_path}`} className="size-full block lg:hidden" />
            <img src={`https://image.tmdb.org/t/p/original${current?.backdrop_path}`} className="size-full hidden lg:block" />
            <div className="size-full flex flex-col justify-end items-start gap-8 sm:gap-10 md:gap-12 lg:gap-6 xl:gap-8 2xl:gap-10 absolute p-6 sm:p-8 md:p-10 lg:px-8 xl:px-9 2xl:px-10 lg:py-4 xl:py-5 2xl:py-6 bg-black/55">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-5 2xl:gap-6">
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                        <p className="max-w-7/10 font-semibold text-lg sm:text-xl md:text-2xl lg:text-base xl:text-lg 2xl:text-xl leading-6 sm:leading-7 md:leading-8 lg:leading-5.5 xl:leading-6 2xl:leading-7 tracking-widest lg:tracking-wider xl:tracking-widest text-white">{current?.title}</p>
                        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-3 xl:gap-4 2xl:gap-5">
                            <p className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none text-zinc-100">
                                <FaStar className="size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-3 2xl:size-3.5 fill-yellow-300" />
                                {handleFormat(current?.vote_average)}
                            </p>
                            <p className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none text-zinc-300">
                                <FaCalendar className="size-3 sm:size-3.5 md:size-4 lg:size-2.5 xl:size-3 2xl:size-3.5 fill-white" />
                                {current?.release_date.split("-").reverse().join("-").replace(/-/g, " ")}
                            </p>
                        </div>
                    </div>
                    <a className="w-fit h-12 sm:h-14 md:h-16 lg:h-10 xl:h-12 2xl:h-14 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 rounded-2xl sm:rounded-[19px] md:rounded-[22px] lg:rounded-xl xl:rounded-[15px] 2xl:rounded-[18px] font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base tracking-wider leading-none px-6 sm:px-7 md:px-8 lg:px-5 xl:px-6 2xl:px-7 bg-orange-500 text-white" href={trailerUrl || "#"} target="_blank" rel="noopener noreferrer">
                        {line('sliderTrailer')}
                        <LuExternalLink className="size-3.5 sm:size-4 md:size-4.5 lg:size-3 xl:size-3.75 2xl:size-4.5" />
                    </a>
                </div>
                <div className="w-full flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                    <button onClick={() => previousSlide()}><FaAngleLeft className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-300" /></button>
                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                        {
                            movies.map((i, index) => (
                                <button key={index} onClick={() => { resetInterval(); setCurrent(movies[index]) }}><span className={`${index == currentIndex ? 'bg-orange-500' : 'bg-zinc-400'} size-2.5 sm:size-3 md:size-3.5 lg:size-2 xl:size-2.25 2xl:size-2.5 block rounded-full`} /></button>
                            ))
                        }
                    </div>
                    <button onClick={() => nextSlide()}><FaAngleRight className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-300" /></button>
                </div>
            </div>
        </div>
    )
}