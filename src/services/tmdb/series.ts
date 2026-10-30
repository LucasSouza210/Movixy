import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"
import type { Lang, Media } from "../../types/tmdb"

export async function getTrendingSeries(lang: Lang) {
    const data = await apiFetch(endpoints.series.trendingWeek, lang)
    return data.results
}

export async function getUpcomingSeries(lang: Lang) {
    const today = new Date().toISOString().split("T")[0]

    const data = await apiFetch(endpoints.series.discover, lang, {
        "first_air_date.gte": today,
        sort_by: "popularity.desc",
        page: 1,
    })

    const sorted = [...data.results].sort((a: Media, b: Media) => {
        const dateA = a.first_air_date ? new Date(a.first_air_date).getTime() : Infinity
        const dateB = b.first_air_date ? new Date(b.first_air_date).getTime() : Infinity
        return dateA - dateB
    })

    return sorted.map((series: Media) => ({
        ...series,
        media_type: "tv",
    }))
}

export async function getPopularSeries(lang: Lang) {
    const data = await apiFetch(endpoints.series.discover, lang, {
        sort_by: "vote_count.desc",
        "vote_count.gte": 500,
        page: 1,
    })

    return data.results.map((series: Media) => ({
        ...series,
        media_type: "tv",
    }))
}

export async function getTopRatedSeries(lang: Lang) {
    const data = await apiFetch(endpoints.series.topRated, lang)

    return data.results.map((serie: Media) => ({
        ...serie,
        media_type: "tv",
    }))
}