import { useEffect, useState } from "react";
import MediaCard from "../../../../components/ui/MediaCard";
import type { Movie } from "../home-slider/HomeSlider";
import { getTrendingMovies } from "../../../../services/movies/movies.services";

export default function TrendingRow() {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getTrendingMovies().then(setMovies)
    }, [])

    return (
        <div className="w-full grid grid-flow-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6 [--grid-gap:--spacing(4)] sm:[--grid-gap:--spacing(5)] md:[--grid-gap:--spacing(6)] lg:[--grid-gap:--spacing(4)] xl:[--grid-gap:--spacing(5)] 2xl:[--grid-gap:--spacing(6)] auto-cols-[calc((100%-var(--grid-gap))/2)] lg:auto-cols-[calc((100%-5*var(--grid-gap))/6)] overflow-x-auto pb-6 sm:pb-7 md:pb-8 lg:pb-3 xl:pb-4 2xl:pb-5">
            {
                movies?.map((i, index) => (
                    <MediaCard movie={i} key={index} />
                ))
            }
        </div>
    )
}