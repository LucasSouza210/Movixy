import { apiFetch } from "../api/client"
import { endpoints } from "../api/endpoints"
import type { Lang, SearchContent } from "../../types/tmdb"

type RawSearchItem = {
    id: number
    media_type: string
    title?: string
    name?: string
    original_title?: string
    original_name?: string
    popularity?: number
    vote_count?: number
    poster_path?: string | null
    profile_path?: string | null
}

type SearchResponse = {
    results?: RawSearchItem[]
    total_pages?: number
}

const debugScores = false

const maxResults = 20

const shortQueryLength = 3
const mediumQueryLength = 5
const shortQueryPages = 3
const mediumQueryPages = 2
const longQueryPages = 2

const exactMatchScore = 50
const startsWithScore = 45
const wordStartsWithScore = 35
const includesScore = 15
const originalTitleFactor = 0.7

const maxPopularityScore = 60
const popularityWeight = 25
const maxVotesScore = 40
const votesWeight = 9

const missingImagePenalty = 15
const personPenalty = 0

function normalize(text: string) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim()
}

function normalizeTitles(titles: (string | undefined)[]) {
    const normalized = titles
        .filter((title): title is string => !!title && title.trim() !== "")
        .map(normalize)

    return Array.from(new Set(normalized))
}

function getTextScore(titles: string[], query: string) {
    let bestScore = 0

    for (const title of titles) {
        let score = 0

        if (title === query) score = exactMatchScore
        else if (title.startsWith(query)) score = startsWithScore
        else if (` ${title}`.includes(` ${query}`)) score = wordStartsWithScore
        else if (title.includes(query)) score = includesScore

        if (score > bestScore) bestScore = score
    }

    return bestScore
}

function getMaxPages(queryLength: number) {
    if (queryLength <= shortQueryLength) return shortQueryPages
    if (queryLength <= mediumQueryLength) return mediumQueryPages
    return longQueryPages
}

function scoreResult(item: RawSearchItem, query: string) {

    const isPerson = item.media_type === "person"

    const displayTitles = normalizeTitles(isPerson ? [item.name] : [item.title, item.name])
    const originalTitles = isPerson ? [] : normalizeTitles([item.original_title, item.original_name])

    const textScore = Math.max(
        getTextScore(displayTitles, query),
        getTextScore(originalTitles, query) * originalTitleFactor
    )

    const popularityScore = Math.min(maxPopularityScore, Math.log10(1 + (item.popularity ?? 0)) * popularityWeight)

    const votesScore = Math.min(maxVotesScore, Math.log10(1 + (item.vote_count ?? 0)) * votesWeight)

    const imagePath = isPerson ? item.profile_path : item.poster_path

    const imagePenalty = imagePath ? 0 : missingImagePenalty

    const typePenalty = isPerson ? personPenalty : 0

    return textScore + popularityScore + votesScore - imagePenalty - typePenalty
}

async function fetchPage(query: string, lang: Lang, page: number) {
    const data = await apiFetch(endpoints.search.multi, lang, { query, page: String(page) }) as unknown as SearchResponse

    return {
        results: data.results ?? [],
        totalPages: data.total_pages ?? 1
    }
}

export async function searchMulti(query: string, lang: Lang) {

    if (!query.trim()) return []

    const normalizedQuery = normalize(query)

    const firstPage = await fetchPage(query, lang, 1)

    const lastPage = Math.min(getMaxPages(normalizedQuery.length), firstPage.totalPages)

    const extraPageNumbers = Array.from({ length: Math.max(0, lastPage - 1) }, (_, index) => index + 2)

    const extraPages = await Promise.allSettled(
        extraPageNumbers.map((page) => fetchPage(query, lang, page))
    )

    const allResults = [
        ...firstPage.results,
        ...extraPages.flatMap((page) => page.status === "fulfilled" ? page.value.results : [])
    ]

    const unique = new Map<string, RawSearchItem>()

    for (const item of allResults) {
        if (item.media_type !== "movie" && item.media_type !== "tv" && item.media_type !== "person") continue

        const key = `${item.media_type}-${item.id}`
        if (!unique.has(key)) unique.set(key, item)
    }

    const ranked = Array.from(unique.values())
        .map((item) => ({ item, score: scoreResult(item, normalizedQuery) }))
        .sort((a, b) => b.score - a.score)

    if (debugScores) {
        console.table(ranked.slice(0, 15).map(({ item, score }) => ({
            type: item.media_type,
            title: item.title ?? item.name,
            original: item.original_title ?? item.original_name,
            popularity: item.popularity,
            votes: item.vote_count,
            score: Math.round(score)
        })))
    }

    return ranked
        .slice(0, maxResults)
        .map(({ item }) => item) as unknown as SearchContent[]

}