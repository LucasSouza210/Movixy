import { apiFetch } from "../api/client"
import type { Lang } from "../../components/ui/buttons/lang-button/components/DropdownButton"
import type { SearchContent } from "../../types/tmdb"

export async function getMediaCast(mediaType: string, id: string, lang: Lang) {
    const data = await apiFetch(`/${mediaType}/${id}/credits`, lang)
    return data.cast
}

export async function getMediaVideos(id: number, mediaType: string | undefined, lang: Lang) {
    const data = await apiFetch(`/${mediaType ?? 'movie'}/${id}/videos`, lang)
    return data.results
}

export async function getMediaTrailer(mediaId: number, type: string | undefined, lang: Lang) {
    const videos = await getMediaVideos(mediaId, type, lang)
    return videos.find(
        (video: any) =>
            video.type === "Trailer" && video.site === "YouTube"
    )
}

export async function getMediaDetails(mediaType: string, id: string, lang: Lang) {
    const append = mediaType === 'movie' ? 'release_dates,credits' : 'content_ratings,credits'
    const data = await apiFetch(`/${mediaType}/${id}`, lang, { append_to_response: append })
    return data
}

export async function getSeasonEpisodes(tvId: number, seasonNumber: number, lang: Lang) {
    const data = await apiFetch(`/tv/${tvId}/season/${seasonNumber}`, lang)
    return data.episodes
}

export async function getRecommendations(mediaType: string, id: number, lang: Lang) {
    const data = await apiFetch(`/${mediaType}/${id}/recommendations`, lang)
    return data.results
}

export async function getTrendingSuggestions(lang: Lang) {
    const [moviesData, seriesData, peopleData] = await Promise.all([apiFetch("/trending/movie/week", lang), apiFetch("/trending/tv/week", lang), apiFetch("/trending/person/week", lang),]),
        movies = moviesData.results.map((item: any) => ({ ...item, media_type: "movie", })),
        series = seriesData.results.map((item: any) => ({ ...item, media_type: "tv", })),
        people = peopleData.results.map((item: any) => ({ ...item, media_type: "person", }));
    return [...movies, ...series, ...people].sort((a: any, b: any) => (b.popularity ?? 0) - (a.popularity ?? 0)) as SearchContent[]
}

export async function getWatchProviders(mediaType: string | undefined, id: number | string | undefined, country: string) {
    const response = await apiFetch(`/${mediaType ?? "movie"}/${id}/watch/providers`),
        result = response?.results?.[country];

    if (!result) return []

    const providers = [...(result.flatrate ?? []), ...(result.free ?? []), ...(result.ads ?? []),],
        uniqueProviders = providers.filter((provider, index, array) => index === array.findIndex(p => p.provider_id === provider.provider_id));

    return uniqueProviders.slice(0, 4)
}
