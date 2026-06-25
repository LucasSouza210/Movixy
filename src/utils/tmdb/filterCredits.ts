import type { PersonCredit } from "../../types/tmdb"

const excludedGenres = [99, 10763, 10764, 10766, 10767]

function filterCredits(credits: PersonCredit[] | undefined): PersonCredit[] {
    if (!credits) return []

    return credits.filter(credit => {
        if (credit.media_type !== 'movie' && credit.media_type !== 'tv') return false
        if (credit.genre_ids?.some(id => excludedGenres.includes(id))) return false
        if (credit.character === 'Self') return false
        return true
    })
}

export default filterCredits