import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"
import { featuredActorsIds, featuredDirectorsIds } from "../../utils/constants"
import type { Lang } from "../../components/ui/buttons/lang-button/components/DropdownButton"
import type { PersonDetails } from "../../types/tmdb"

export async function getDirectorsCollections(lang: Lang) {

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
