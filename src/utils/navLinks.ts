import { LuHouse, LuClapperboard, LuTv } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

export const navLinks = [
    {
        title: 'homeLink',
        src: "/",
        icon: LuHouse
    },
    {
        title: 'moviesLink',
        src: '/movies',
        icon: LuClapperboard
    },
    {
        title: 'seriesLink',
        src: '/series',
        icon: LuTv
    },
    {
        title: 'profileLink',
        src: '/user',
        icon: FaRegUser
    }
]