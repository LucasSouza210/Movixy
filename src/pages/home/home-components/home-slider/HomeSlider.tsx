import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { getNowPlayingMovies } from "../../../../services/movies/movies.services"
import MovieSlide from "./MovieSlide";
import SliderActions from "./SliderActions";
import useLang from "../../../../hooks/useLang";

export type Genre = {
    id: number
    name: string
}

export type Media = {
    id: number
    media_type?: string
    title?: string
    name?: string
    overview?: string
    poster_path: string
    backdrop_path: string
    vote_average: number
    release_date?: string
    first_air_date?: string
    runtime?: number
    number_of_seasons?: number
    number_of_episodes?: number
    production_companies?: {
        id: number
        name: string
        logo_path: string | null
    }[]

    networks?: {
        id: number
        name: string
        logo_path: string | null
    }[]

    genres?: Genre[]
}

export default function HomeSlider() {

    const lang = useLang()

    const [movies, setMovies] = useState<Media[]>([])
    const [currentIndex, setCurrentIndex] = useState(1)
    const [transition, setTransition] = useState(true)

    const isAnimatingRef = useRef(false)

    const extendedMovies = useMemo(() => {
        if (!movies.length) return []
        return [movies[movies.length - 1], ...movies, movies[0]]
    }, [movies])

    const sliderInterval = useRef<number | undefined>(undefined)

    const syncSlide = (index: number) => {
        setTransition(false)

        requestAnimationFrame(() => {
            setCurrentIndex(index)

            requestAnimationFrame(() => {
                setTransition(true)
            })
        })
    }

    const handleVisibility = useCallback(() => {
        if (document.hidden || !movies.length) return

        let nextIndex = currentIndex

        if (currentIndex === 0) {
            nextIndex = movies.length
        }
        else if (currentIndex === movies.length + 1) {
            nextIndex = 1
        }

        if (nextIndex !== currentIndex) {
            syncSlide(nextIndex)
        }
    }, [currentIndex, movies.length])

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target !== e.currentTarget) return

        isAnimatingRef.current = false

        if (currentIndex === movies.length + 1) {
            syncSlide(1)
        }
        else if (currentIndex === 0) {
            syncSlide(movies.length)
        }
    }

    const resetInterval = () => {
        clearInterval(sliderInterval.current)
        sliderInterval.current = setInterval(() => {
            if (isAnimatingRef.current) return
            isAnimatingRef.current = true
            setCurrentIndex(prev => prev + 1)
        }, 7000)
    }

    const navigateSlide = (direction: 1 | -1) => {
        if (isAnimatingRef.current) return

        isAnimatingRef.current = true

        setCurrentIndex(prev => prev + direction)

        resetInterval()
    }

    const nextSlide = () => navigateSlide(1)
    const previousSlide = () => navigateSlide(-1)

    useEffect(() => {
        getNowPlayingMovies(lang).then(setMovies)
    }, [lang])

    useEffect(() => {
        if (movies.length) {
            setCurrentIndex(1)
            resetInterval()
        }
    }, [movies])

    useEffect(() => {
        const onVisibilityChange = () => {
            if (document.hidden) {
                clearInterval(sliderInterval.current)
                return
            }
            handleVisibility()
            resetInterval()
        }

        document.addEventListener("visibilitychange", onVisibilityChange)

        return () => {
            document.removeEventListener("visibilitychange", onVisibilityChange)
        }
    }, [handleVisibility])

    useEffect(() => {
        return () => clearInterval(sliderInterval.current)
    }, [])

    return (
        <div className="w-full flex relative rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border border-default" onClick={() => console.log(movies)}>
            <div className="w-full overflow-hidden">
                <div onTransitionEnd={handleTransitionEnd} className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: transition ? 'transform 500ms ease-in-out' : 'none' }}>
                    {extendedMovies.map((movie, index) => (
                        <div key={`${movie.id}-${index}`} className="min-w-full flex justify-center">
                            <MovieSlide movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            <SliderActions movies={movies} previousSlide={previousSlide} nextSlide={nextSlide} resetInterval={resetInterval} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
    )
}