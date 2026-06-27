import type { PersonCredit } from "../../types/tmdb";

const getCreditScore = (credit: PersonCredit) => {
    const rating = credit.vote_average ?? 0,
        votes = credit.vote_count ?? 0,
        popularity = credit.popularity ?? 0,
        mediaWeight = credit.media_type === "tv" ? 0.9 : 1.1;

    if (votes < 100) return 0

    const order = credit.order ?? 0
    const importance = credit.job === 'Director' || credit.department === 'Writing'
        ? 1.5
        : order <= 2 ? 1.5 : order <= 5 ? 1.3 : order <= 10 ? 1.15 : order <= 20 ? 1 : 0.8

    return (
        rating *
        Math.log10(votes + 1) *
        Math.sqrt(popularity + 1) *
        importance *
        mediaWeight
    )
}

const getTopCredits = (credits: PersonCredit[], limit: number) => {
    return [...credits]
        .filter(credit => (credit.vote_count ?? 0) >= 100)
        .filter((credit, index, self) => index === self.findIndex(item => item.id === credit.id))
        .sort((a, b) => getCreditScore(b) - getCreditScore(a))
        .slice(0, limit)
}

export default getTopCredits