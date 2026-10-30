import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"
import { featuredActorsIds } from "../../utils/constants"
import type { Lang } from "../../components/ui/buttons/lang-button/components/DropdownButton"

async function isFeature(movie: any, lang: Lang) {
    if ((movie.vote_count ?? 0) >= 2000) return true

    try {
        const detail = await apiFetch(`/movie/${movie.id}`, lang)
        return (detail.runtime ?? 0) >= 40
    } catch {
        return false
    }
}

export async function getDirectors(directors: number[], lang: Lang) {

    const today = new Date().toISOString().slice(0, 10)

    const results = await Promise.all(

        directors.map(async (id) => {
            const [director, credits] = await Promise.all([
                apiFetch(`/person/${id}`, lang),
                apiFetch(`/person/${id}/movie_credits`, lang),
            ])

            const candidates = credits.crew
                .filter((movie: any) => movie.department === "Directing" && movie.job === "Director")
                .filter((movie: any) => movie.release_date && movie.release_date <= today)
                .filter((movie: any) => (movie.vote_count ?? 0) >= 200)
                .filter((movie: any) => !movie.genre_ids?.some((genre: number) => [99, 10770].includes(genre)))
                .filter((movie: any, index: number, self: any[]) => index === self.findIndex((m) => m.id === movie.id))

            const checks = await Promise.all(candidates.map((movie: any) => isFeature(movie, lang)))

            const directedMovies = candidates
                .filter((_: any, index: number) => checks[index])
                .sort((a: any, b: any) => (b.vote_count || 0) - (a.vote_count || 0))

            return {
                ...director,
                movies: directedMovies
            }
        })
    )

    return results
}

export async function getPersonCredits(id: number) {
    const data = await apiFetch(`${endpoints.people.person}/${id}/combined_credits`)
    return data
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