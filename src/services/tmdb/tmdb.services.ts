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