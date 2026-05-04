import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"

function getMonthDateRange() {
  const now = new Date()

  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)

  const format = (date: Date) => date.toISOString().split("T")[0]

  return {
    start: format(start),
    end: format(end),
  }
}

export async function getMonthlyReleases() {
  const { start, end } = getMonthDateRange()

  const data = await apiFetch(endpoints.movies.discover, {
    "primary_release_date.gte": start,
    "primary_release_date.lte": end,
    sort_by: "popularity.desc",
  })

  return data.results.slice(0, 5)
}