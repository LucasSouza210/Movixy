import { useEffect, useState } from "react";
import MediaCard from "../../../../components/ui/MediaCard";
import type { Movie } from "../home-slider/HomeSlider";
import { getTrendingMovies } from "../../../../services/movies/movies.services";
import MediaRow from "../../../../components/ui/MediaRow";

export default function TrendingMoviesRow() {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getTrendingMovies().then(setMovies)
    }, [])

    return (
        <MediaRow content={movies} />
    )
}