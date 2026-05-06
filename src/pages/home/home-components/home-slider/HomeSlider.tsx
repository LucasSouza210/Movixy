import { useEffect, useRef, useState } from "react"
import { getNowPlayingMovies } from "../../../../services/movies/movies.services"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useTranslate } from "../../../../translations/Translations";
import MovieSlide from "./MovieSlide";

export default function HomeSlider() {

    const { line } = useTranslate()

    const [movies, setMovies] = useState<any[]>([])
    const [cloneIndex, setCloneIndex] = useState(1)
    const [transition, setTransition] = useState(true)

    const circularIndex = (index: number, length: number) => (index + length) % length

    const extendedMovies = movies.length ? [movies[movies.length - 1], ...movies, movies[0]] : []

    const sliderInterval = useRef<number | undefined>(undefined)

    const handleFormat = (rate: number) => {
        const truncated = Math.trunc(rate * 10) / 10
        return truncated.toFixed(1)
    }

    const handleTransitionEnd = (e: React.TransitionEvent) => {

        if (e.target !== e.currentTarget) return

        if (cloneIndex === movies.length + 1) {
            setTransition(false)
            setCloneIndex(1)
        }
        else if (cloneIndex === 0) {
            setTransition(false)
            setCloneIndex(movies.length)
        }
    }

    const resetInterval = () => {
        clearInterval(sliderInterval.current)
        sliderInterval.current = setInterval(() => {
            setCloneIndex(prev => prev + 1)
        }, 5000)
    }

    const nextSlide = () => {
        setCloneIndex(prev => prev + 1)
    }

    const previousSlide = () => {
        setCloneIndex(prev => prev - 1)
    }

    useEffect(() => {
        getNowPlayingMovies().then(setMovies)
    }, [])

    useEffect(() => {
        if (movies.length) {
            setCloneIndex(1)
        }
    }, [movies])

    useEffect(() => {
        if (!movies.length) return

        sliderInterval.current = setInterval(() => {
            setCloneIndex(prev => prev + 1)
        }, 5000)

        return () => clearInterval(sliderInterval.current)
    }, [movies])

    useEffect(() => {
        if (!transition) {
            const timeout = setTimeout(() => {
                setTransition(true);
            }, 20);
            return () => clearTimeout(timeout);
        }
    }, [transition])

    return (
        <div className="w-full flex relative rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border border-default" onClick={() => console.log(movies)}>
            <div className="w-full overflow-hidden">
                <div onTransitionEnd={handleTransitionEnd} className={`flex ${transition ? 'transition-transform duration-500' : ''}`} style={{ transform: `translateX(-${cloneIndex * 100}%)`, transition: transition ? 'transform 500ms ease-in-out' : 'none' }}>
                    {extendedMovies.map((movie, index) => (
                        <div key={`${movie.id}-${index}`} className="min-w-full flex justify-center">
                            <MovieSlide movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="w-full flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                    <button onClick={() => previousSlide()}><FaAngleLeft className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-300" /></button>
                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                        {
                            movies.map((i, index) => (
                                <button key={index} onClick={() => { resetInterval(); setCurrent(movies[index]) }}><span className={`${index == currentIndex ? 'bg-orange-500' : 'bg-zinc-400'} size-2.5 sm:size-3 md:size-3.5 lg:size-2 xl:size-2.25 2xl:size-2.5 block rounded-full`} /></button>
                            ))
                        }
                    </div>
                    <button onClick={() => nextSlide()}><FaAngleRight className="size-5 sm:size-6 md:size-7 lg:size-4 xl:size-4.5 2xl:size-5 fill-zinc-300" /></button>
                </div> */}
        </div>
    )
}