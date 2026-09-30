import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"
import type { Lang } from "../../components/ui/buttons/lang-button/components/DropdownButton"
import type { Media } from "../../types/tmdb"

export async function getNowPlayingMovies(lang: Lang) {
    const data = await apiFetch(endpoints.movies.nowPlaying, lang, {
        page: 1,
    })

    return data.results.slice(0, 5)
}

export async function getTrendingMovies(lang: Lang) {
    const data = await apiFetch(endpoints.movies.trendingWeek, lang)
    return data.results
}

export async function getUpcomingMovies(lang: Lang) {
    const today = new Date().toISOString().split("T")[0]

    const data = await apiFetch(endpoints.movies.discover, lang, {
        "primary_release_date.gte": today,
        sort_by: "popularity.desc",
        page: 1,
    })

    return data.results.map((movie: Media) => ({
        ...movie,
        media_type: "movie",
    }))
}

export async function getPopularMovies(lang: Lang) {
    const data = await apiFetch(endpoints.movies.discover, lang, {
        sort_by: "vote_count.desc",
        "vote_count.gte": 1000,
        page: 1,
    })

    return data.results.map((movie: Media) => ({
        ...movie,
        media_type: "movie",
    }))
}

export async function getTopRatedMovies(lang: Lang) {
    const data = await apiFetch(endpoints.movies.topRated, lang)

    return data.results.map((movie: Media) => ({
        ...movie,
        media_type: "movie",
    }))
}