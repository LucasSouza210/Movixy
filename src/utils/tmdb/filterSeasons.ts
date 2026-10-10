import type { Season } from "../../types/tmdb"

export function filterSeasons(seasons: Season[] | undefined): Season[] {
    if (!seasons) return []

    return seasons.filter(season => season.season_number > 0 && season.episode_count > 0)
}