import type { Media, SearchContent } from "../../types/tmdb"
import { featuredActorsIds, featuredDirectorsIds } from "../../utils/constants"
import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"

type Lang = 'pt' | 'en' | 'es'

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
  const data = await apiFetch(endpoints.movies.upcoming, lang)
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

export async function getTrendingSeries(lang: Lang) {
  const data = await apiFetch(endpoints.series.trendingWeek, lang)
  return data.results
}

export async function getPopularActors(lang: Lang) {

  const actors = await Promise.all(
    featuredActorsIds.map((id) =>
      apiFetch(`/person/${id}`, lang)
    )
  )

  return actors
}

export async function getDirectorsColections(lang: Lang) {

  const directors = await Promise.all(

    featuredDirectorsIds.map(async (id) => {
      const director = await apiFetch(`/person/${id}`, lang)
      const credits = await apiFetch(`/person/${id}/movie_credits`, lang)
      const directedMovies = credits.crew
        .filter((movie: any) => movie.department === "Directing" && movie.job === "Director")
        .filter((movie: any, index: number, self: any[]) => index === self.findIndex((m) => m.id === movie.id))
        .sort((a: any, b: any) => (b.vote_count || 0) - (a.vote_count || 0))

      return {
        ...director,
        movies: directedMovies
      }
    })
  )

  return directors
}

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

export async function getPersonCredits(id: number) {
  const data = await apiFetch(`${endpoints.people.person}/${id}/combined_credits`)
  return data
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

export async function getPersonDetails(id: string, lang: Lang) {
  const data = await apiFetch(`/person/${id}`, lang, { append_to_response: "combined_credits" })
  return data
}

function normalize(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

function scoreResult(item: any, query: string) {

  const title = normalize(item.media_type === "person" ? item.name : (item.title ?? item.name ?? ""))

  const search = normalize(query)

  let score = item.popularity ?? 0

  if (title === search) score += 100000
  else if (title.startsWith(search)) score += 50000
  else if (title.includes(search)) score += 10000

  return score
}

export async function searchMulti(query: string, lang: Lang) {

  if (!query.trim()) return []

  const data = await apiFetch(endpoints.search.multi, lang, { query })

  return data.results
    .filter((item: any) => item.media_type === "movie" || item.media_type === "tv" || item.media_type === "person")
    .map((item: any) => ({ ...item, media_type: item.media_type }))
    .sort((a: any, b: any) => scoreResult(b, query) - scoreResult(a, query)) as SearchContent[]

}

export async function getTrendingSuggestions(lang: Lang) {

  const [moviesData, seriesData, peopleData] = await Promise.all([apiFetch("/trending/movie/week", lang), apiFetch("/trending/tv/week", lang), apiFetch("/trending/person/week", lang),])

  const movies = moviesData.results.map((item: any) => ({ ...item, media_type: "movie", }))
  const series = seriesData.results.map((item: any) => ({ ...item, media_type: "tv", }))
  const people = peopleData.results.map((item: any) => ({ ...item, media_type: "person", }))

  return [...movies, ...series, ...people].sort((a: any, b: any) => (b.popularity ?? 0) - (a.popularity ?? 0)) as SearchContent[]

}

export async function getWatchProviders(mediaType: string | undefined, id: number | string | undefined, country: string) {

  const response = await apiFetch(`/${mediaType ?? "movie"}/${id}/watch/providers`)

  const result = response?.results?.[country]

  if (!result) return []

  const providers = [...(result.flatrate ?? []), ...(result.free ?? []), ...(result.ads ?? []),]

  const uniqueProviders = providers.filter((provider, index, array) => index === array.findIndex(p => p.provider_id === provider.provider_id))

  return uniqueProviders.slice(0, 4)

}