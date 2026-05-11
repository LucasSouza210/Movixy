import { featuredActorsIds } from "../../utils/constants"
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

export async function getMovieVideos(movieId: number, lang: Lang) {
  const data = await apiFetch(`/movie/${movieId}/videos`, lang)
  return data.results
}

export async function getMovieTrailer(movieId: number, lang: Lang) {

  const videos = await getMovieVideos(movieId, lang)

  return videos.find(
    (video: any) =>
      video.type === "Trailer" && video.site === "YouTube"
  )
}

export async function getActorCredits(id: number) {
  const data = await apiFetch(`${endpoints.people.person}/${id}/combined_credits`)
  return data
}