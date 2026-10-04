import type { Media, PersonCredit } from "../../types/tmdb"

type ProjectFilters = {
    type: string
    genres: number[]
    rate: {
        min: number | null
        max: number | null
    }
}

export function applyListFilters(projects: PersonCredit[] | Media[], filters: ProjectFilters, formatRate: (rate: number) => string) {
    const filtered = projects.filter(i => {
        const rate = Number(formatRate(i.vote_average!))

        return (
            (filters.type === "all" || i.media_type === filters.type) &&
            rate <= (filters.rate.max ?? 10) &&
            rate >= (filters.rate.min ?? 0) &&
            (
                filters.genres.length === 0 ||
                (filters.genres.length > 0 && i.genre_ids?.some(genre => filters.genres.includes(genre)))
            )
        )
    })

    return filtered
}