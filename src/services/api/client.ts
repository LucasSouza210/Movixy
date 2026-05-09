import getTmdbLanguage from "../../utils/getTmdbLanguage"

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_KEY

type Params = Record<string, string | number | boolean>

export async function apiFetch<T = any>(
    endpoint: string,
    lang: 'pt' | 'en' | 'es' = 'en',
    params?: Params,
): Promise<T> {
    const url = new URL(BASE_URL + endpoint)

    url.searchParams.append("api_key", API_KEY)

    url.searchParams.append(
        "language",
        getTmdbLanguage(lang)
    )

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, String(value))
        })
    }

    const response = await fetch(url.toString())

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.status_message || "Erro na API")
    }

    return response.json()
}