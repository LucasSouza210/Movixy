import { useTranslate } from "../translations/Translations"

export function useNavLinks() {
    const { line } = useTranslate()

    return [
        {
            title: line('moviesLink'),
            src: ''
        },
        {
            title: line('seriesLink'),
            src: ''
        },
        {
            title: line('artistsLink'),
            src: ''
        }
    ]
}