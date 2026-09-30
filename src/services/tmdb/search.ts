import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"
import type { Lang } from "../../components/ui/buttons/lang-button/components/DropdownButton"
import type { SearchContent } from "../../types/tmdb"

function normalize(text: string) {
    return text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

function scoreResult(item: any, query: string) {

    const title = normalize(item.media_type === "person" ? item.name : (item.title ?? item.name ?? ""))

    const search = normalize(query)

    let score = item.popularity ?? 0

    if (title === search) score += 100000
    else if (title.startsWith(search)) score += 50000
    else if (title.includes(search)) score += 10000

    return score
}

export async function searchMulti(query: string, lang: Lang) {

    if (!query.trim()) return []

    const data = await apiFetch(endpoints.search.multi, lang, { query })

    return data.results
        .filter((item: any) => item.media_type === "movie" || item.media_type === "tv" || item.media_type === "person")
        .map((item: any) => ({ ...item, media_type: item.media_type }))
        .sort((a: any, b: any) => scoreResult(b, query) - scoreResult(a, query)) as SearchContent[]

}