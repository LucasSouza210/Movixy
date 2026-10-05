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
        title: { pt: "Drama", en: "Drama", es: "Drama" },
        value: 18,
        icon: LuDrama
    },
    {
        title: { pt: "Ação", en: "Action", es: "Acción" },
        value: 28,
        icon: LuSwords
    },
    {
        title: { pt: "Comédia", en: "Comedy", es: "Comedia" },
        value: 35,
        icon: LuLaugh
    },
    {
        title: { pt: "Aventura", en: "Adventure", es: "Aventura" },
        value: 12,
        icon: LuCompass
    },
    {
        title: { pt: "Suspense", en: "Thriller", es: "Suspenso" },
        value: 53,
        icon: LuSearch
    },
    {
        title: { pt: "Crime", en: "Crime", es: "Crimen" },
        value: 80,
        icon: LuShield
    },
    {
        title: { pt: "Ficção Científica", en: "Science Fiction", es: "Ciencia ficción" },
        value: 878,
        icon: LuRocket
    },
    {
        title: { pt: "Fantasia", en: "Fantasy", es: "Fantasía" },
        value: 14,
        icon: LuWandSparkles
    },
    {
        title: { pt: "Romance", en: "Romance", es: "Romance" },
        value: 10749,
        icon: LuHeart
    },
    {
        title: { pt: "Terror", en: "Horror", es: "Terror" },
        value: 27,
        icon: LuGhost
    },
    {
        title: { pt: "Mistério", en: "Mystery", es: "Misterio" },
        value: 9648,
        icon: LuPuzzle
    },
    {
        title: { pt: "Animação", en: "Animation", es: "Animación" },
        value: 16,
        icon: LuFilm
    },
    {
        title: { pt: "Família", en: "Family", es: "Familia" },
        value: 10751,
        icon: LuUsers
    },
    {
        title: { pt: "Documentário", en: "Documentary", es: "Documental" },
        value: 99,
        icon: LuCamera
    },
    {
        title: { pt: "História", en: "History", es: "Historia" },
        value: 36,
        icon: LuBookOpen
    },
    {
        title: { pt: "Guerra", en: "War", es: "Bélica" },
        value: 10752,
        icon: LuBadgeAlert
    },
    {
        title: { pt: "Música", en: "Music", es: "Música" },
        value: 10402,
        icon: LuMusic
    },
    {
        title: { pt: "Faroeste", en: "Western", es: "Western" },
        value: 37,
        icon: LuMountain
    },

    // TV

    {
        title: { pt: "Ação e Aventura", en: "Action & Adventure", es: "Acción y Aventura" },
        value: 10759,
        icon: LuSwords
    },
    {
        title: { pt: "Sci-Fi e Fantasia", en: "Sci-Fi & Fantasy", es: "Ciencia ficción y fantasía" },
        value: 10765,
        icon: LuSparkles
    },
    {
        title: { pt: "Reality Show", en: "Reality", es: "Reality" },
        value: 10764,
        icon: LuTv
    },
    {
        title: { pt: "Infantil", en: "Kids", es: "Infantil" },
        value: 10762,
        icon: LuBaby
    },
    {
        title: { pt: "Guerra e Política", en: "War & Politics", es: "Guerra y Política" },
        value: 10768,
        icon: LuFlag
    },
    {
        title: { pt: "Novela", en: "Soap", es: "Telenovela" },
        value: 10766,
        icon: LuMessageCircle
    },
    {
        title: { pt: "Talk Show", en: "Talk", es: "Programa de entrevistas" },
        value: 10767,
        icon: LuMessagesSquare
    },
    {
        title: { pt: "Notícias", en: "News", es: "Noticias" },
        value: 10763,
        icon: LuNewspaper
    },
    {
        title: { pt: "Cinema TV", en: "TV Movie", es: "Película para TV" },
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

export const defaultListFilters = {
    type: 'all',
    genres: [],
    rate: {
        min: null,
        max: null,
        error: false
    }
}

export const sortOptions = [
    {
        title: {
            pt: "Mais recentes",
            en: "Newest",
            es: "Más recientes"
        },
        value: "newest"
    },
    {
        title: {
            pt: "Mais antigos",
            en: "Oldest",
            es: "Más antiguos"
        },
        value: "oldest"
    },
    {
        title: {
            pt: "Maior avaliação",
            en: "Highest rated",
            es: "Mejor valorados"
        },
        value: "highest_rated"
    },
    {
        title: {
            pt: "Menor avaliação",
            en: "Lowest rated",
            es: "Peor valorados"
        },
        value: "lowest_rated"
    }
]

export const newListFields = [
    {
        name: "title" as const,
        title: "listTitleLabel",
        placeholder: "listTitlePlaceholder",
        maxLength: 25,
        rules: {
            required: "listTitleRequiredError",
            minLength: { value: 2, message: "listTitleMinLengthError" },
        },
    },
    {
        name: "description" as const,
        title: "listDescriptionLabel",
        placeholder: "listDescriptionPlaceholder",
        maxLength: 80,
        textarea: true,
    },
]