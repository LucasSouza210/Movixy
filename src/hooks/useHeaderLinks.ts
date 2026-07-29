import { useTranslate } from "../translations/Translations"
import { LuHouse, LuClapperboard, LuTv, LuUsers } from "react-icons/lu";

export function useNavLinks() {
    const { line } = useTranslate()

    return [
        {
            title: line('homeLink'),
            src: "/",
            icon: LuHouse
        },
        {
            title: line('moviesLink'),
            src: '/movies',
            icon: LuClapperboard
        },
        {
            title: line('seriesLink'),
            src: '/series',
            icon: LuTv
        },
        {
            title: line('peopleLink'),
            src: '/people',
            icon: LuUsers
        }
    ]
}