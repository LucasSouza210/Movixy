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

export type ActorCredits = {
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