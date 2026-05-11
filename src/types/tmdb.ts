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