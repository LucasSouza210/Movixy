import { useTranslate } from "../translations/Translations"
import { LuHouse, LuClapperboard, LuTv} from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

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
            title: line('profileLink'),
            src: '/user',
            icon: FaRegUser
        }
    ]
}