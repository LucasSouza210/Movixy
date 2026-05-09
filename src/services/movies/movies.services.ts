import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"

export async function getNowPlayingMovies() {
  const data = await apiFetch(endpoints.movies.nowPlaying, {
    page: 1,
  })

  return data.results.slice(0, 5)
}

export async function getTrendingMovies() {
  const data = await apiFetch(endpoints.movies.trendingWeek)
  return data.results
}

export async function getTrendingSeries() {
  const data = await apiFetch(endpoints.series.trendingWeek)
  return data.results
}

export async function getMovieVideos(movieId: number) {
  const data = await apiFetch(`/movie/${movieId}/videos`)
  return data.results
}

export async function getMovieTrailer(movieId: number) {

  const videos = await getMovieVideos(movieId)

  return videos.find(
    (video: any) =>
      video.type === "Trailer" && video.site === "YouTube"
  )
}