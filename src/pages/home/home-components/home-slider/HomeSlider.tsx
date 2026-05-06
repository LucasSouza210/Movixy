import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { getNowPlayingMovies } from "../../../../services/movies/movies.services"
import MovieSlide from "./MovieSlide";
import SliderActions from "./SliderActions";

export default function HomeSlider() {

    const [movies, setMovies] = useState<any[]>([])
    const [cloneIndex, setCloneIndex] = useState(1)
    const [transition, setTransition] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false)

    const extendedMovies = useMemo(() => {
        if (!movies.length) return []
        return [movies[movies.length - 1], ...movies, movies[0]]
    }, [movies])

    const sliderInterval = useRef<number | undefined>(undefined)

    const handleVisibility = useCallback(() => {
        if (document.hidden || !movies.length) return

        setTransition(false)
        setCloneIndex(prev => {
            if (prev === 0) return movies.length
            if (prev === movies.length + 1) return 1
            return prev
        })
    }, [movies.length])

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target !== e.currentTarget) return

        setIsAnimating(false)

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
            setCloneIndex(prev => {
                if (isAnimating) return prev
                return prev + 1
            })
        }, 5000)
    }

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCloneIndex(prev => {
            if (isAnimating) return prev
            return prev + 1
        })
        resetInterval()
    }

    const previousSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCloneIndex(prev => prev - 1)
        resetInterval()
    }

    useEffect(() => {
        getNowPlayingMovies().then(setMovies)
    }, [])

    useEffect(() => {
        if (movies.length) {
            setCloneIndex(1)
            resetInterval()
        }
    }, [movies])

    useEffect(() => {
        if (!transition) {
            const timeout = setTimeout(() => {
                setTransition(true);
            }, 20);
            return () => clearTimeout(timeout);
        }
    }, [transition])

    useEffect(() => {
        const onVisibilityChange = () => {
            if (document.hidden) return
            handleVisibility()
        }

        document.addEventListener("visibilitychange", onVisibilityChange)

        return () => {
            document.removeEventListener("visibilitychange", onVisibilityChange)
        }
    }, [handleVisibility])

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
            <SliderActions movies={movies} previousSlide={previousSlide} nextSlide={nextSlide} resetInterval={resetInterval} cloneIndex={cloneIndex} setCloneIndex={setCloneIndex} />
        </div>
    )
}