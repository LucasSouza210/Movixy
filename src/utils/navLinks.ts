import { LuHouse, LuClapperboard, LuTv, LuUser, LuLogIn } from "react-icons/lu";

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
        icon: LuUser
    },
    {
        title: 'signIn',
        src: '/auth',
        icon: LuLogIn
    }
]