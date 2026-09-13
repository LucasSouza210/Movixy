import type { ContentItem, Media, Person, PersonDetails, PersonItem, SearchContent } from "../../types/tmdb"
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

export async function getTopRatedSeries(lang: Lang) {
  const data = await apiFetch(endpoints.series.topRated, lang)

  return data.results.map((serie: Media) => ({
    ...serie,
    media_type: "tv",
  }))
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
  const data = await apiFetch(`${endpoints.people.person}/${id}`, lang, { append_to_response: "combined_credits", })
  return data
}

export async function getPersonCardContent(id: string, lang: Lang) {

  const person = await getPersonDetails(id, lang)

  return {
    id: person.id,
    name: person.name,
    profile_path: person.profile_path,
    credits: [...(person.combined_credits?.cast ?? []), ...(person.combined_credits?.crew ?? []),],
  }

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

export async function getPopularActors(lang: Lang) {

  const actors = await Promise.all(
    featuredActorsIds.map((id) =>
      getPersonCardContent(String(id), lang)
    )
  )

  return actors
}

export async function getTrendingPeople(lang: Lang) {
  const data = await apiFetch(endpoints.people.trendingWeek, lang)
  return data.results
}

export async function getTrendingPeopleByDepartment(lang: Lang, department: "Acting" | "Directing", limit = 12) {
  let page = 1
  let peopleList: PersonDetails[] = []

  while (peopleList.length < limit) {
    const data = await apiFetch(endpoints.people.trendingWeek, lang, { page })

    peopleList.push(...data.results.filter((person: PersonDetails) => person.known_for_department === department))

    if (page >= data.total_pages) break
    page++
  }

  const trimmed = peopleList.slice(0, limit)

  const withContent = await Promise.all(
    trimmed.map((person) => getPersonCardContent(String(person.id), lang))
  )

  return withContent
}

export async function getList(items: (ContentItem | PersonItem)[], lang: Lang): Promise<(Media | Person)[]> {

  const results = items.map((item) => {
    const endpoint = "mediaType" in item ? `/${item.mediaType}/${item.id}` : `${endpoints.people.person}/${item.id}`
    return apiFetch(endpoint, lang)
  })

  const settled = await Promise.allSettled(results)

  const data = settled.map((result, index) => {
    if (result.status === 'rejected') {
      console.error(`Erro ao buscar item ${items[index].id}:`, result.reason)
      return null
    }

    const item = items[index]
    if ("mediaType" in item) {
      return { ...result.value, media_type: item.mediaType }
    }

    return result.value
  }).filter((item): item is Media | Person => item !== null)

  return data
}