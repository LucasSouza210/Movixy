import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { getNowPlayingMovies } from "../../../../services/tmdb/movies"
import HomeSliderSkeleton from "./HomeSliderSkeleton";
import MovieSlide from "./components/MovieSlide";
import SliderActions from "./components/slider-actions/SliderActions";
import useLang from "../../../../hooks/useLang";
import type { Media } from "../../../../types/tmdb";



export default function HomeSlider() {

    const lang = useLang()

    const [loading, setLoading] = useState(true)
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

    useEffect(() => {
        setLoading(true)

        getNowPlayingMovies(lang)
            .then(setMovies)
            .finally(() => setLoading(false))
    }, [lang])

    if (loading) {
        return <HomeSliderSkeleton />
    }

    return (
        <div className="w-full aspect-2/3 lg:aspect-video flex relative rounded-[40px] sm:rounded-[46px] md:rounded-[52px] lg:rounded-4xl xl:rounded-[36px] 2xl:rounded-[40px] overflow-hidden border border-default">
            <div className="size-full overflow-hidden">
                <div onTransitionEnd={handleTransitionEnd} className="size-full flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: transition ? 'transform 500ms ease-in-out' : 'none' }}>
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