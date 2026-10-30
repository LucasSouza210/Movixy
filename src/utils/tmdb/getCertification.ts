import type { MediaCertification } from "../../types/tmdb"

export function getCertification(media: MediaCertification | null, mediaType: string, lang: "pt" | "en" | "es") {

    const regionMap = {
        pt: "BR",
        en: "US",
        es: "ES"
    }

    const region = regionMap[lang]

    if (mediaType === "movie") {
        return media?.release_dates?.results
            ?.find(item => item.iso_3166_1 === region)
            ?.release_dates
            ?.find(item => item.certification)
            ?.certification || null
    }

    return media?.content_ratings?.results?.find(item => item.iso_3166_1 === region)?.rating || null

}