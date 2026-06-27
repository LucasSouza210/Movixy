import type { PersonCredit } from "../../types/tmdb"

const excludedGenres = [99, 10763, 10764, 10766, 10767]

function getRolePriority(credit: PersonCredit): number {
    if (credit.job === 'Director') return 0
    if (credit.department === 'Writing') return 1
    if (credit.character && credit.character !== 'Self') return 2
    return 3
}

function filterCredits(credits: PersonCredit[] | undefined): PersonCredit[] {
    if (!credits) return []

    const filtered = credits.filter(credit => {
        if (credit.media_type !== 'movie' && credit.media_type !== 'tv') return false
        if (credit.genre_ids?.some(id => excludedGenres.includes(id))) return false
        if (credit.character === 'Self') return false
        return true
    })

    const best = new Map<string, PersonCredit>()

    for (const credit of filtered) {
        const key = `${credit.id}-${credit.media_type}`
        const existing = best.get(key)

        if (!existing || getRolePriority(credit) < getRolePriority(existing)) {
            best.set(key, credit)
        }
    }

    return Array.from(best.values())
}

export default filterCredits