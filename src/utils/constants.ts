import { LuDrama, LuSwords, LuLaugh, LuCompass, LuSearch, LuShield, LuRocket, LuWandSparkles, LuHeart, LuGhost, LuPuzzle, LuFilm, LuUsers, LuBookOpen, LuBadgeAlert, LuMusic, LuMountain, LuTv, LuSparkles, LuCamera, LuBaby, LuFlag, LuMessageCircle, LuMessagesSquare, LuNewspaper, LuMonitorPlay, LuLayers3 } from "react-icons/lu"
import { BiMoviePlay } from "react-icons/bi"
import { PiTelevisionSimple } from "react-icons/pi"


export const featuredActorsIds = [
    500,
    287,
    6193,
    31,
    3223,
    85,
    1245,
    1892,
    6384,
    11701,
    12835,
    192,
    62,
    18277,
    18918,
    51329,
    24045,
    16828,
    72129,
    976,
]

export const featuredDirectorsIds = [
    488,   // Steven Spielberg
    525,   // Christopher Nolan
    138,   // Quentin Tarantino
    1032,  // Martin Scorsese
    4027, // Frank Darabont
    2710   // James Cameron
]

export const genres = [
    {
        name: { pt: "Drama", en: "Drama", es: "Drama" },
        value: 18,
        icon: LuDrama
    },
    {
        name: { pt: "Ação", en: "Action", es: "Acción" },
        value: 28,
        icon: LuSwords
    },
    {
        name: { pt: "Comédia", en: "Comedy", es: "Comedia" },
        value: 35,
        icon: LuLaugh
    },
    {
        name: { pt: "Aventura", en: "Adventure", es: "Aventura" },
        value: 12,
        icon: LuCompass
    },
    {
        name: { pt: "Suspense", en: "Thriller", es: "Suspenso" },
        value: 53,
        icon: LuSearch
    },
    {
        name: { pt: "Crime", en: "Crime", es: "Crimen" },
        value: 80,
        icon: LuShield
    },
    {
        name: { pt: "Ficção Científica", en: "Science Fiction", es: "Ciencia ficción" },
        value: 878,
        icon: LuRocket
    },
    {
        name: { pt: "Fantasia", en: "Fantasy", es: "Fantasía" },
        value: 14,
        icon: LuWandSparkles
    },
    {
        name: { pt: "Romance", en: "Romance", es: "Romance" },
        value: 10749,
        icon: LuHeart
    },
    {
        name: { pt: "Terror", en: "Horror", es: "Terror" },
        value: 27,
        icon: LuGhost
    },
    {
        name: { pt: "Mistério", en: "Mystery", es: "Misterio" },
        value: 9648,
        icon: LuPuzzle
    },
    {
        name: { pt: "Animação", en: "Animation", es: "Animación" },
        value: 16,
        icon: LuFilm
    },
    {
        name: { pt: "Família", en: "Family", es: "Familia" },
        value: 10751,
        icon: LuUsers
    },
    {
        name: { pt: "Documentário", en: "Documentary", es: "Documental" },
        value: 99,
        icon: LuCamera
    },
    {
        name: { pt: "História", en: "History", es: "Historia" },
        value: 36,
        icon: LuBookOpen
    },
    {
        name: { pt: "Guerra", en: "War", es: "Bélica" },
        value: 10752,
        icon: LuBadgeAlert
    },
    {
        name: { pt: "Música", en: "Music", es: "Música" },
        value: 10402,
        icon: LuMusic
    },
    {
        name: { pt: "Faroeste", en: "Western", es: "Western" },
        value: 37,
        icon: LuMountain
    },

    // TV

    {
        name: { pt: "Ação e Aventura", en: "Action & Adventure", es: "Acción y Aventura" },
        value: 10759,
        icon: LuSwords
    },
    {
        name: { pt: "Sci-Fi e Fantasia", en: "Sci-Fi & Fantasy", es: "Ciencia ficción y fantasía" },
        value: 10765,
        icon: LuSparkles
    },
    {
        name: { pt: "Reality Show", en: "Reality", es: "Reality" },
        value: 10764,
        icon: LuTv
    },
    {
        name: { pt: "Infantil", en: "Kids", es: "Infantil" },
        value: 10762,
        icon: LuBaby
    },
    {
        name: { pt: "Guerra e Política", en: "War & Politics", es: "Guerra y Política" },
        value: 10768,
        icon: LuFlag
    },
    {
        name: { pt: "Novela", en: "Soap", es: "Telenovela" },
        value: 10766,
        icon: LuMessageCircle
    },
    {
        name: { pt: "Talk Show", en: "Talk", es: "Programa de entrevistas" },
        value: 10767,
        icon: LuMessagesSquare
    },
    {
        name: { pt: "Notícias", en: "News", es: "Noticias" },
        value: 10763,
        icon: LuNewspaper
    },
    {
        name: { pt: "Cinema TV", en: "TV Movie", es: "Película para TV" },
        value: 10770,
        icon: LuMonitorPlay
    }
]

export const mediaTypes = [
    {
        title: "all",
        value: "all",
        icon: LuLayers3
    },
    {
        title: "movies",
        value: "movie",
        icon: BiMoviePlay
    },
    {
        title: "tvShows",
        value: "tv",
        icon: PiTelevisionSimple
    }
]

export const defaultProjectFilters = {
    type: 'all',
    genres: [],
    rate: {
        min: 0,
        max: 10
    }
}