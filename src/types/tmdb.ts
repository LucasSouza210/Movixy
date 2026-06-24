export type Credit = {
    id: number
    media_type?: 'movie' | 'tv'
    title?: string
    name?: string
    character?: string
    popularity?: number
    vote_average?: number
    vote_count?: number
    poster_path?: string
}

export type Actor = {
    id: number
    name: string
    profile_path: string | null
    popularity: number
    place_of_birth?: string
    birthday?: string
}

export type PersonCredits = {
    cast: Credit[]
    crew: Credit[]
}

type DirectorMovie = {
    id: number
    title: string
    poster_path: string | null
    backdrop_path: string | null
    vote_average: number
    vote_count: number
    release_date?: string
}

export type Director = {
    id: number
    name: string
    profile_path: string | null
    popularity: number
    known_for_department: string
    birthday?: string
    place_of_birth?: string
    movies: DirectorMovie[]
}

export type CastMember = {
    id: number
    name: string
    character: string
    profile_path: string | null
}

export type CrewMember = {
    id: number
    name: string
    job: string
    department: string
}

export type Genre = {
    id: number
    name: string
}

export type Episode = {
    id: number
    name: string
    overview: string
    episode_number: number
    season_number: number
    runtime?: number
    vote_average: number
    still_path: string | null
    air_date?: string
}

export type Season = {
    id: number
    name: string
    overview: string
    poster_path: string | null
    season_number: number
    episode_count: number
    air_date?: string

    episodes?: Episode[]
}

export type Media = {
    id: number
    media_type?: string
    title?: string
    name?: string
    overview?: string
    poster_path: string
    backdrop_path: string
    vote_average: number
    release_date?: string
    first_air_date?: string
    runtime?: number
    seasons?: Season[]
    number_of_seasons?: number
    number_of_episodes?: number
    production_companies?: {
        id: number
        name: string
        logo_path: string | null
    }[]

    networks?: {
        id: number
        name: string
        logo_path: string | null
    }[]

    credits?: {
        cast: CastMember[]
        crew: CrewMember[]
    }

    created_by?: {
        id: number
        name: string
    }[]

    budget?: number
    revenue?: number

    genres?: Genre[]
}

export type PersonDetails = {
    id: number
    name: string
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string | null
    deathday: string | null
    gender: number
    homepage: string | null
    imdb_id: string | null
    known_for_department: string
    place_of_birth: string | null
    popularity: number
    profile_path: string | null

    combined_credits: {
        cast: PersonCredit[]
        crew: PersonCredit[]
    }
}

export type PersonCredit = Credit & {
    media_type: "movie" | "tv"

    adult?: boolean
    original_title?: string
    original_name?: string

    backdrop_path: string | null
    overview: string

    release_date?: string
    first_air_date?: string

    department?: string
    job?: string

    genre_ids: number[]

    order?: number
    episode_count?: number
}