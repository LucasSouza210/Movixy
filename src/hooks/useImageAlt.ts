import { useTranslate } from "../translations/Translations"

type AltType = 'poster' | 'backdrop' | 'photo' | 'avatar' | 'banner'

export function useImageAlt() {

    const { line } = useTranslate()

    const getImageAlt = (value: string | undefined | null, altType: AltType) => {

        const title = value?.trim()

        switch (altType) {
            case "poster":
                return title ? `${line("posterOf")} ${title}` : line("unknownPoster")

            case "backdrop":
                return title ? `${line("backdropOf")} ${title}` : line("unknownBackdrop")

            case "photo":
                return title ? `${line("photoOf")} ${title}` : line("unknownPerson")

            case "avatar":
                return title ? `${line("profilePhotoOf")} ${title}` : line("profilePhoto")

            case "banner":
                return title ? `${line("profileBannerOf")} ${title}` : line("profileBanner")
        }
    }

    return { getImageAlt }
}