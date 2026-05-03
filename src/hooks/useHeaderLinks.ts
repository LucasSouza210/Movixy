import { useTranslate } from "../translations/Translations"
import { LuFilm, LuTv, LuUsers } from "react-icons/lu";

export function useNavLinks() {
    const { line } = useTranslate()

    return [
        {
            title: line('moviesLink'),
            src: '/movies',
            icon: LuFilm
        },
        {
            title: line('seriesLink'),
            src: '',
            icon: LuTv
        },
        {
            title: line('artistsLink'),
            src: '',
            icon: LuUsers
        }
    ]
}