import type { ActorCredit } from "../../types/tmdb"

type ProjectFilters = {
    type: string
    genres: number[]
    rate: {
        min: number | null
        max: number | null
    }
}

export function applyProjectFilters(
    projects: ActorCredit[],
    filters: ProjectFilters,
    formatRate: (rate: number) => string
) {
    return projects.filter(i => {
        const rate = Number(formatRate(i.vote_average!))

        return (
            (filters.type === "all" || i.media_type === filters.type) &&
            rate <= (filters.rate.max ?? 10) &&
            rate >= (filters.rate.min ?? 0) &&
            (
                filters.genres.length === 0 ||
                filters.genres.every(genre => i.genre_ids.includes(genre))
            )
        )
    })
}