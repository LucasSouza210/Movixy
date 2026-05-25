import type { Lang } from "../components/ui/lang-selection/DropdownButton"

export function getCertification(
    media: any,
    mediaType: string,
    lang: Lang
) {

    const regionMap = {
        pt: 'BR',
        en: 'US',
        es: 'ES'
    }

    const region = regionMap[lang]

    if (mediaType === 'movie') {
        return media.release_dates?.results?.find((i: any) => i.iso_3166_1 === region)?.release_dates?.find((i: any) => i.certification)?.certification || null
    }

    return media.content_ratings?.results?.find((i: any) => i.iso_3166_1 === region)?.rating || null
}