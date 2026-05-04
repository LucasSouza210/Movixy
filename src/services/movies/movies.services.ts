import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"

export async function getNowPlayingMovies() {
  const data = await apiFetch(endpoints.movies.nowPlaying, {
    page: 1,
  })

  return data.results.slice(0, 5)
}