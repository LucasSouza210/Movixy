import type { Lang, MediaCertification, MediaType } from "../../types/tmdb"

export function getCertification(media: MediaCertification | null, mediaType: MediaType, lang: Lang) {

    const regionMap: Record<Lang, string> = { pt: "BR", en: "US", es: "ES" }
    const regions = [...new Set([regionMap[lang], "US"])]

    for (const region of regions) {
        const result =
            mediaType === "movie"
                ? media?.release_dates?.results
                    ?.find(i => i.iso_3166_1 === region)
                    ?.release_dates?.find(i => i.certification)
                    ?.certification
                : media?.content_ratings?.results
                    ?.find(i => i.iso_3166_1 === region)
                    ?.rating

        if (result) return result
    }

    return null
}