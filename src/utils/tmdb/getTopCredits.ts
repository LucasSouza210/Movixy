import type { PersonCredit } from "../../types/tmdb";

const minVotes = 100

const castProminenceByOrder = [
    { maxOrder: 0, weight: 1 },
    { maxOrder: 2, weight: 0.9 },
    { maxOrder: 5, weight: 0.72 },
    { maxOrder: 10, weight: 0.52 },
    { maxOrder: 20, weight: 0.35 }
]
const defaultCastProminence = 0.2
const unknownOrderProminence = 0.5

const directorProminence = 0.9
const writingProminence = 0.5
const productionProminence = 0.3
const otherCrewProminence = 0.15

const leadVoiceOrder = 2
const leadVoicePenalty = 0.85
const supportingVoicePenalty = 0.4
const uncreditedPenalty = 0.2
const cameoPenalty = 0.3
const selfPenalty = 0.25

const talkGenreId = 10767
const newsGenreId = 10763
const realityGenreId = 10764
const documentaryGenreId = 99
const talkNewsPenalty = 0.3
const realityPenalty = 0.4
const documentaryPenalty = 0.6

const tvWeight = 0.95
const movieWeight = 1
const baseTvEpisodesFactor = 0.4
const episodesDivisor = 20

const normalizeText = (text: string | undefined) => {
    return (text ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
}

const isCrewCredit = (credit: PersonCredit) => !!credit.job || !!credit.department

const getCastProminence = (order: number | undefined) => {
    if (order === undefined) return unknownOrderProminence

    const tier = castProminenceByOrder.find(item => order <= item.maxOrder)

    return tier ? tier.weight : defaultCastProminence
}

const getCrewProminence = (credit: PersonCredit) => {
    if (credit.job === "Director") return directorProminence
    if (credit.department === "Writing" || credit.job === "Creator") return writingProminence
    if (credit.department === "Production") return productionProminence

    return otherCrewProminence
}

const getCharacterPenalty = (credit: PersonCredit) => {
    const character = normalizeText(credit.character)

    if (!character) return 1

    let penalty = 1

    if (/\b(voice|voz|voix)\b/.test(character)) {
        penalty *= (credit.order ?? Infinity) <= leadVoiceOrder ? leadVoicePenalty : supportingVoicePenalty
    }

    if (/uncredited|nao creditad|sin acreditar/.test(character)) penalty *= uncreditedPenalty

    if (/cameo|participacao/.test(character)) penalty *= cameoPenalty

    if (/\b(self|himself|herself|themselves|ele mesmo|ela mesma|el mismo|ella misma)\b|archive|arquivo|archivo/.test(character)) penalty *= selfPenalty

    return penalty
}

const getGenrePenalty = (credit: PersonCredit) => {
    const genres = credit.genre_ids ?? []

    if (genres.includes(talkGenreId) || genres.includes(newsGenreId)) return talkNewsPenalty
    if (genres.includes(realityGenreId)) return realityPenalty
    if (genres.includes(documentaryGenreId)) return documentaryPenalty

    return 1
}

const getEpisodesFactor = (credit: PersonCredit) => {
    if (credit.media_type !== "tv" || credit.episode_count === undefined) return 1

    return Math.min(1, baseTvEpisodesFactor + credit.episode_count / episodesDivisor)
}

const getCreditScore = (credit: PersonCredit) => {
    const rating = credit.vote_average ?? 0
    const votes = credit.vote_count ?? 0

    if (votes < minVotes) return 0

    const quality = (rating / 10) * Math.log10(votes + 1)

    const prominence = isCrewCredit(credit) ? getCrewProminence(credit) : getCastProminence(credit.order)

    const mediaWeight = credit.media_type === "tv" ? tvWeight : movieWeight

    return quality * prominence * mediaWeight * getEpisodesFactor(credit) * getCharacterPenalty(credit) * getGenrePenalty(credit)
}

const getTopCredits = (credits: PersonCredit[], limit: number) => {
    const bestByKey = new Map<string, { credit: PersonCredit, score: number }>()

    for (const credit of credits) {
        const key = `${credit.media_type}-${credit.id}`
        const score = getCreditScore(credit)
        const current = bestByKey.get(key)

        if (!current || score > current.score) {
            bestByKey.set(key, { credit, score })
        }
    }

    return Array.from(bestByKey.values())
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.credit)
}

export default getTopCredits